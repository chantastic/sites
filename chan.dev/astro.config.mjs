import {defineConfig, sharpImageService} from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import remark_toc from 'remark-toc'
import remark_deflist from 'remark-deflist'
import {rehypeHeadingIds} from '@astrojs/markdown-remark'
import rehype_autolink_headings from 'rehype-autolink-headings'
import {h, s} from 'hastscript'
import remark_external_links from 'remark-external-links'
import remark_embedder from '@remark-embedder/core'
import oembed_transformer from '@remark-embedder/transformer-oembed'
import remark_obsidian_callout from 'remark-obsidian-callout'
import remark_directive from 'remark-directive'
import {visit} from 'unist-util-visit'
import astro_expressive_code from 'astro-expressive-code'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'
function process_remark_directives() {
	// note: this function acts mutably
	return (tree) => {
		visit(tree, (node) => {
			if (
				!(
					node.type === 'textDirective' ||
					node.type === 'leafDirective' ||
					node.type === 'containerDirective'
				)
			) {
				return
			}
			const data = node.data || (node.data = {})
			const hast = h(node.name, node.attributes)
			switch (node.type) {
				case 'containerDirective': {
					switch (node.name) {
						case 'hidden-script': {
							data.hName = 'section'
							data.hProperties = {
								className: 'hidden-video-script',
								...hast.properties,
							}
							break
						}
						default: {
							data.hName = hast.tagName
							data.hProperties = hast.properties
							break
						}
					}
					break
				}
				default: {
					data.hName = hast.tagName
					data.hProperties = hast.properties
					break
				}
			}
		})
	}
}
function exchange_relative_links_with_absolute() {
	return (tree) => {
		visit(tree, (node) => {
			if (
				['link', 'definition'].includes(node?.type) &&
				node.url.startsWith('/')
			) {
				node.url = new URL(node.url, site).toString()
			}
		})
	}
}
const site = import.meta.env.DEV
	? 'http://localhost:2426'
	: 'https://chan.dev'

const plaintextLightCodeTheme = {
	name: 'plaintext-light',
	type: 'light',
	colors: {
		'editor.background': '#ffffff',
		'editor.foreground': '#000000',
	},
	tokenColors: [
		{
			scope: ['comment', 'punctuation.definition.comment'],
			settings: {foreground: '#767676', fontStyle: 'italic'},
		},
		{
			scope: ['keyword', 'storage', 'storage.type', 'operator', 'keyword.operator'],
			settings: {foreground: '#000000'},
		},
		{
			scope: ['string', 'constant.other.symbol'],
			settings: {foreground: '#000000'},
		},
		{
			scope: ['constant', 'constant.numeric', 'constant.language'],
			settings: {foreground: '#000000'},
		},
		{
			scope: ['entity.name.function', 'support.function'],
			settings: {foreground: '#000000'},
		},
		{
			scope: ['entity.name.type', 'support.type', 'support.class'],
			settings: {foreground: '#000000'},
		},
		{
			scope: ['variable', 'identifier', 'property', 'variable.other.property', 'support.variable.property'],
			settings: {foreground: '#000000'},
		},
		{
			scope: ['punctuation', 'meta.brace', 'meta.delimiter'],
			settings: {foreground: '#000000'},
		},
		{
			scope: ['markup.heading', 'markup.bold'],
			settings: {foreground: '#000000', fontStyle: 'bold'},
		},
		{
			scope: ['markup.italic'],
			settings: {foreground: '#000000', fontStyle: 'italic'},
		},
		{
			scope: ['invalid', 'invalid.illegal'],
			settings: {foreground: '#000000', fontStyle: 'underline'},
		},
	],
}

const plaintextDarkCodeTheme = {
	name: 'plaintext-dark',
	type: 'dark',
	colors: {
		'editor.background': '#000000',
		'editor.foreground': '#ffffff',
	},
	tokenColors: [
		{
			scope: ['comment', 'punctuation.definition.comment'],
			settings: {foreground: '#767676', fontStyle: 'italic'},
		},
		{
			scope: ['keyword', 'storage', 'storage.type', 'operator', 'keyword.operator'],
			settings: {foreground: '#ffffff'},
		},
		{
			scope: ['string', 'constant.other.symbol'],
			settings: {foreground: '#ffffff'},
		},
		{
			scope: ['constant', 'constant.numeric', 'constant.language'],
			settings: {foreground: '#ffffff'},
		},
		{
			scope: ['entity.name.function', 'support.function'],
			settings: {foreground: '#ffffff'},
		},
		{
			scope: ['entity.name.type', 'support.type', 'support.class'],
			settings: {foreground: '#ffffff'},
		},
		{
			scope: ['variable', 'identifier', 'property', 'variable.other.property', 'support.variable.property'],
			settings: {foreground: '#ffffff'},
		},
		{
			scope: ['punctuation', 'meta.brace', 'meta.delimiter'],
			settings: {foreground: '#ffffff'},
		},
		{
			scope: ['markup.heading', 'markup.bold'],
			settings: {foreground: '#ffffff', fontStyle: 'bold'},
		},
		{
			scope: ['markup.italic'],
			settings: {foreground: '#ffffff', fontStyle: 'italic'},
		},
		{
			scope: ['invalid', 'invalid.illegal'],
			settings: {foreground: '#ffffff', fontStyle: 'underline'},
		},
	],
}

// https://astro.build/config
export default defineConfig({
	server: {
		port: 2426,
	},
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			exclude: ['fsevents'],
		},
	},
	site,
	integrations: [
		sitemap({
			filter: (page) => {
				if (page.endsWith('/share/')) {
					return false
				}
				if (page.includes('/dailies/')) {
					return false
				}
				return true
			},
		}),
		astro_expressive_code({
			themes: [plaintextLightCodeTheme, plaintextDarkCodeTheme],
			defaultProps: {
				frame: 'none',
			},
			styleOverrides: {
				frames: {
					frameBoxShadowCssValue: 'none',
				},
				textMarkers: {
					markBackground: 'light-dark(#dbe5ff, #001b66)',
					markBorderColor: '#0000ff',
					insBackground: 'light-dark(#dcffdc, #003300)',
					insBorderColor: '#008000',
					delBackground: 'light-dark(#ffdddd, #660000)',
					delBorderColor: '#ff0000',
				},
			},
		}),
		react(),
	],
	image: {
		service: sharpImageService(),
	},
	markdown: {
		remarkPlugins: [
			exchange_relative_links_with_absolute,
			[
				// https://github.com/remarkjs/remark-toc
				remark_toc,
				{
					maxDepth: 2,
					heading:
						'toc|outline|contents|table[ -]of[ -]contents?',
				},
			],
			remark_deflist,
			// https://www.reliablesoft.net/noreferrer-noopener/#noreferrer-vs-nofollow
			[
				remark_external_links,
				{
					rel: 'noopener',
				},
			],
			remark_obsidian_callout,
			remark_directive,
			process_remark_directives,
		],
		rehypePlugins: [
			// https://docs.astro.build/en/guides/markdown-content/#heading-ids-and-plugins
			rehypeHeadingIds,
			[
				rehype_autolink_headings,
				{
					behavior: 'append',
					properties: {
						className: 'heading--direct-link',
					},
					group: h('span', {
						tabIndex: '-1',
					}),
					content: (element) => [
						h(
							'span',
							{
								className: 'heading--direct-link-icon',
								ariaHidden: true,
							},
							s(
								'svg',
								{
									width: 16,
									height: 16,
									version: '1.1',
									viewBox: '0 0 16 16',
									xlmns: 'http://www.w3.org/2000/svg',
								},
								[
									s('path', {
										fillrule: 'evenodd',
										fill: 'currentcolor',
										d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
									}),
								]
							)
						),
						// h(
						//   "span",
						//   {
						//     "is:raw": true,
						//     className: "sr-only",
						//   },
						//   `Section titled ${(element?.children[0]?.value || "").trim()}`
						// ),
					],
				},
			],
		],
	},
	adapter: cloudflare(),
})
