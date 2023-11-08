import type {APIRoute} from 'astro'

// https://scrapingant.com/blog/playwright-web-scraping-guide
import {webkit as engine} from 'playwright'

const get_thewirecutter_deals = async () => {
	const browser = await engine.launch({headless: true})
	const context = await browser.newContext({
		userAgent:
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' +
			' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
	})
	const page = await context.newPage()
	await page.goto('https://www.nytimes.com/wirecutter/deals/')

	let elements = await page
		.getByRole('listitem')
		.filter({has: page.getByRole('heading')})
		.filter({has: page.getByText('hours ago')})
		.filter({has: page.getByText('$')})
		.filter({has: page.getByRole('link')})
		.all()

	let result = []

	for (const li of elements) {
		let item = {
			name: await li.getByRole('heading').textContent(),
			price: await li.getByText('$').first().textContent(),
			savings: await li.getByText('$').nth(1).textContent(),
			link: await li
				.getByRole('link')
				.first()
				.getAttribute('href'),
		}

		result.push(item)
	}

	await browser.close()

	return result
}

export const prerender = false

export const GET: APIRoute = async ({params, request}) => {
	let deals = await get_thewirecutter_deals()

	return new Response(
		JSON.stringify({
			deals,
		})
	)
}
