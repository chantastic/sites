import sanitizeHtml from 'sanitize-html'
import * as POSTS from '#content/posts/_posts'
import MarkdownIt from 'markdown-it'
import site from '#/metadata.json'
import {url} from '#modules/site'

const parser = new MarkdownIt()

function formatPostEntryAsJSONItem([
	file,
	{frontmatter, compiledContent},
]) {
	let itemUrl = url(file.match(/posts\/(.+)\.md/)[1])

	return {
		id: itemUrl,
		url: itemUrl,
		title: frontmatter.title,
		content_html: sanitizeHtml(compiledContent(), {
			allowedTags: [
				...sanitizeHtml.defaults.allowedTags,
				'img',
			],
			allowedAttributes: {
				...sanitizeHtml.defaults.allowedAttributes,
				code: ['class'],
			},
		}),
		summary: frontmatter.description,
		image: frontmatter.cover,
		date_published: frontmatter.publishDate,
		tags: frontmatter.tags,
	}
}

export async function GET() {
	const postImportResult = import.meta.glob(
		'../../content/posts/**/*.md',
		{
			eager: true,
		}
	)

	const posts = POSTS.processFeedEntries(
		postImportResult,
		formatPostEntryAsJSONItem
	)

	return new Response(
		JSON.stringify({
			version: 'https://jsonfeed.org/version/1.1',
			title: site.title,
			home_page_url: import.meta.env.SITE,
			feed_url: url(
				`${site.feed.path}/${site.feed.jsonFilename}`
			),
			description: site.description,
			authors: [
				{
					name: site.author.name,
					url: import.meta.env.SITE,
				},
			],
			language: 'en-us',
			items: posts,
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/feed+json',
			},
		}
	)
}
