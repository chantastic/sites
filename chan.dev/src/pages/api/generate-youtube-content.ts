export const prerender = false

import type { APIRoute } from 'astro';
import { authenticateWithSessionCookie, COOKIE_NAME } from '../../lib/authkit';
import Anthropic from '@anthropic-ai/sdk';

export const POST: APIRoute = async ({ request, cookies }) => {
  // Auth check
  const cookie = cookies.get(COOKIE_NAME);
  if (!cookie) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    await authenticateWithSessionCookie({ value: cookie.value });
  } catch {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    const srtFile = formData.get('srtFile') as File;
    const prompt = formData.get('prompt') as string;

    if (!srtFile) {
      return new Response(
        JSON.stringify({ message: 'No SRT file provided' }), 
        { status: 400 }
      );
    }

    // Read the SRT file content
    const srtContent = await srtFile.text();

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: import.meta.env.ANTHROPIC_API_KEY,
    });

    // Prepare the prompt for Claude
    const systemPrompt = `You are a YouTube content optimization expert. Based on the provided SRT file and context, generate:
1. 5 viral title ideas
2. An engaging description with keywords
3. Chapter markers based on the SRT timestamps
4. Relevant tags for maximum discoverability

SRT Content:
${srtContent}

Additional Context:
${prompt}

Please format your response as JSON with the following structure:
{
  "titles": ["title1", "title2", ...],
  "description": "full description",
  "chapters": "00:00 Introduction\\n05:23 Next Chapter\\n...",
  "tags": ["tag1", "tag2", ...]
}`;

    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 4000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: 'Please analyze the content and provide the YouTube optimization details.',
        },
      ],
    });

    // Parse Claude's response
    const content = response.content[0].text;
    const result = JSON.parse(content);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to process request' }), 
      { status: 500 }
    );
  }
}; 