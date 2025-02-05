import {mutation} from './_generated/server'
import schema from './schema'

const habitFields = schema.tables.habits.validator.fields

export const create = mutation({
	args: habitFields,
	handler: async (ctx, args) => {
		const id = await ctx.db.insert('habits', args)
		return await ctx.db.get(id)
	},
})
