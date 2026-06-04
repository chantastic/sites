import {SITE_INDEX, jsonResponse} from '#modules/agent-discovery'

export const prerender = false

const MCP_PROTOCOL_VERSION = '2025-06-18'

const tools = [
	{
		name: 'get_site_index',
		description:
			'Return public chan.dev sections, feeds, APIs, and discovery endpoints.',
		inputSchema: {
			type: 'object',
			properties: {},
			additionalProperties: false,
		},
	},
]

export async function GET() {
	return jsonResponse({
		name: 'chan.dev MCP endpoint',
		protocolVersion: MCP_PROTOCOL_VERSION,
		serverCard: SITE_INDEX.discovery.mcpServerCard,
	})
}

export async function POST({request}: {request: Request}) {
	let body: unknown

	try {
		body = await request.json()
	} catch {
		return jsonResponse(
			{
				jsonrpc: '2.0',
				id: null,
				error: {
					code: -32700,
					message: 'Parse error',
				},
			},
			{status: 400}
		)
	}

	if (Array.isArray(body)) {
		const responses = body
			.map(handleJsonRpcMessage)
			.filter((response) => response !== null)

		return jsonResponse(responses)
	}

	const response = handleJsonRpcMessage(body)

	if (response === null) {
		return new Response(null, {status: 202})
	}

	return jsonResponse(response)
}

function handleJsonRpcMessage(message: unknown) {
	if (!isJsonRpcRequest(message)) {
		return jsonRpcError(null, -32600, 'Invalid Request')
	}

	if (message.id === undefined) {
		return null
	}

	const id = message.id

	switch (message.method) {
		case 'initialize':
			return jsonRpcResult(id, {
				protocolVersion: MCP_PROTOCOL_VERSION,
				capabilities: {
					tools: {},
				},
				serverInfo: {
					name: 'chan.dev',
					version: '2026.06.02',
				},
			})
		case 'tools/list':
			return jsonRpcResult(id, {tools})
		case 'tools/call':
			return handleToolCall(message, id)
		default:
			return jsonRpcError(id, -32601, 'Method not found')
	}
}

function handleToolCall(message: JsonRpcRequest, id: JsonRpcId) {
	const params = message.params

	if (!isToolCallParams(params)) {
		return jsonRpcError(id, -32602, 'Invalid params')
	}

	if (params.name !== 'get_site_index') {
		return jsonRpcError(id, -32602, 'Unknown tool')
	}

	return jsonRpcResult(id, {
		content: [
			{
				type: 'text',
				text: JSON.stringify(SITE_INDEX, null, 2),
			},
		],
	})
}

function isJsonRpcRequest(value: unknown): value is JsonRpcRequest {
	if (!value || typeof value !== 'object') {
		return false
	}

	const message = value as Record<string, unknown>

	return (
		message.jsonrpc === '2.0' &&
		typeof message.method === 'string'
	)
}

function isToolCallParams(value: unknown): value is {name: string} {
	if (!value || typeof value !== 'object') {
		return false
	}

	return typeof (value as Record<string, unknown>).name === 'string'
}

function jsonRpcResult(id: JsonRpcId, result: unknown) {
	return {
		jsonrpc: '2.0',
		id,
		result,
	}
}

function jsonRpcError(
	id: JsonRpcId | null,
	code: number,
	message: string
) {
	return {
		jsonrpc: '2.0',
		id,
		error: {
			code,
			message,
		},
	}
}

type JsonRpcId = string | number | null

interface JsonRpcRequest {
	jsonrpc: '2.0'
	id?: JsonRpcId
	method: string
	params?: unknown
}
