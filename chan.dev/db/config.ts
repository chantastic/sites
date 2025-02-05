import {defineDb, defineTable, column} from 'astro:db'

const Habit = defineTable({
	columns: {
		id: column.number({primaryKey: true}),
		title: column.text(),
		recurrence_pattern: column.text(),
		owner: column.text(),
	},
})

export default defineDb({
	tables: {Habit},
})
