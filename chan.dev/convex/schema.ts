import {defineSchema, defineTable} from 'convex/server'
import {v} from 'convex/values'

const Habit = {
	title: v.string(),
	recurrence_pattern: v.string(),
	owner: v.string(),
}

export default defineSchema({
	habit: defineTable(Habit),
})
