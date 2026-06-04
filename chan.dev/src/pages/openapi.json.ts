import {
	SITE_INDEX,
	SITE_ORIGIN,
	jsonResponse,
} from '#modules/agent-discovery'

export async function GET() {
	return jsonResponse(
		{
			openapi: '3.1.0',
			info: {
				title: 'chan.dev public content API',
				version: '2026.06.02',
				description:
					'Public, read-only endpoints for chan.dev content discovery.',
			},
			servers: [
				{
					url: SITE_ORIGIN,
				},
			],
			paths: {
				'/api/tags.json': {
					get: {
						summary: 'List post tag metadata',
						operationId: 'getTagMetadata',
						responses: {
							'200': {
								description:
									'Post tag counts and post metadata grouped by publication status.',
								content: {
									'application/json': {
										schema: {
											type: 'object',
											properties: {
												all: {
													$ref: '#/components/schemas/TagGroup',
												},
												published: {
													$ref: '#/components/schemas/TagGroup',
												},
												unpublished: {
													$ref: '#/components/schemas/TagGroup',
												},
											},
										},
									},
								},
							},
						},
					},
				},
				'/feeds/feed.json': {
					get: {
						summary: 'Get JSON Feed',
						operationId: 'getJsonFeed',
						responses: {
							'200': {
								description: 'Public JSON Feed document.',
								content: {
									'application/feed+json': {
										schema: {
											type: 'object',
										},
									},
								},
							},
						},
					},
				},
				'/feeds/rss.xml': {
					get: {
						summary: 'Get RSS feed',
						operationId: 'getRssFeed',
						responses: {
							'200': {
								description: 'Public RSS feed document.',
								content: {
									'application/rss+xml': {
										schema: {
											type: 'string',
										},
									},
								},
							},
						},
					},
				},
				'/api/status.json': {
					get: {
						summary: 'Get API status',
						operationId: 'getApiStatus',
						responses: {
							'200': {
								description: 'Status metadata.',
								content: {
									'application/json': {
										schema: {
											type: 'object',
											properties: {
												status: {
													type: 'string',
													const: 'ok',
												},
												service: {
													type: 'string',
												},
												public: {
													type: 'boolean',
												},
												authenticated: {
													type: 'boolean',
												},
											},
										},
									},
								},
							},
						},
					},
				},
			},
			components: {
				schemas: {
					TagGroup: {
						type: 'object',
						properties: {
							count: {
								type: 'integer',
							},
							tags: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										tag: {
											type: 'string',
										},
										count: {
											type: 'integer',
										},
									},
								},
							},
							entries: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										slug: {
											type: 'string',
										},
										title: {
											type: 'string',
										},
										publishDate: {
											type: 'string',
											format: 'date-time',
										},
										tags: {
											type: 'array',
											items: {
												type: 'string',
											},
										},
									},
								},
							},
						},
					},
				},
			},
			externalDocs: {
				url: SITE_INDEX.apis.docs,
			},
		},
		{},
		'application/vnd.oai.openapi+json; charset=utf-8'
	)
}
