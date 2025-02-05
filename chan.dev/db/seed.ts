import {db, Habit} from 'astro:db'

export default async function () {
	await db.insert(Habit).values([
		{
			id: 1,
			title: 'Jesus time',
			recurrence_pattern: '0101111',
			owner: 'Rock',
		},
		{
			id: 2,
			title: 'Grooming (brush, comb, deoderize)',
			recurrence_pattern: '1111111',
			owner: 'Rock',
		},
		{
			id: 3,
			title: 'Tidy room',
			recurrence_pattern: '1100011',
			owner: 'Rock',
		},
		{
			id: 4,
			title: 'Clothes to laundry',
			recurrence_pattern: '1111111',
			owner: 'Rock',
		},
		{
			id: 5,
			title: 'School work',
			recurrence_pattern: '0111110',
			owner: 'Rock',
		},
		{
			id: 6,
			title: 'Clean toilet',
			recurrence_pattern: '1100011',
			owner: 'Rock',
		},
		{
			id: 7,
			title: 'Vaccuum room',
			recurrence_pattern: '1100011',
			owner: 'Rock',
		},
		{
			id: 8,
			title: 'Practice drums',
			recurrence_pattern: '1011111',
			owner: 'Rock',
		},
		{
			id: 9,
			title: 'Jesus time',
			recurrence_pattern: '0100011',
			owner: 'Ruby',
		},
		{
			id: 10,
			title: 'Grooming (brush, brush, deoderize)',
			recurrence_pattern: '1111111',
			owner: 'Ruby',
		},
		{
			id: 11,
			title: 'Tidy room',
			recurrence_pattern: '0011100',
			owner: 'Ruby',
		},
		{
			id: 12,
			title: 'Clothes to laundry',
			recurrence_pattern: '1111111',
			owner: 'Ruby',
		},
		{
			id: 13,
			title: 'School work',
			recurrence_pattern: '0111110',
			owner: 'Ruby',
		},
		{
			id: 14,
			title: 'Vaccuum runners',
			recurrence_pattern: '0010100',
			owner: 'Ruby',
		},
		{
			id: 15,
			title: 'Dishes to dishwasher',
			recurrence_pattern: '0010100',
			owner: 'Ruby',
		},
		{
			id: 16,
			title: 'Dust living room',
			recurrence_pattern: '0010100',
			owner: 'Ruby',
		},
	])
}
