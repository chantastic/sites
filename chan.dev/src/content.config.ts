import {defineCollection} from 'astro:content'
import {glob} from 'astro/loaders'
import {collectionSchema as dailies} from '#content/dailies/_dailies'
import {collectionSchema as entities} from '#content/entities/_entities'
import {collectionSchema as guides} from '#content/guides/_guides'
import {collectionSchema as lessons} from '#content/lessons/_lessons'
import {collectionSchema as os} from '#content/os/_os'
import {collectionSchema as posts} from '#content/posts/_posts'
import {collectionSchema as projects} from '#content/projects/_projects'
import {collectionSchema as recipes} from '#content/recipes/_recipes'
import {collectionSchema as uses} from '#content/uses/_uses'

const markdownPattern = ['**/*.md', '**/*.mdx', '!**/_*.*']

export const collections = {
	dailies: defineCollection({
		loader: glob({
			base: './src/content/dailies',
			pattern: markdownPattern,
		}),
		schema: dailies.schema,
	}),
	entities: defineCollection({
		loader: glob({
			base: './src/content/entities',
			pattern: ['**/*.yaml', '**/*.yml', '!**/_*.*'],
		}),
		schema: entities.schema,
	}),
	guides: defineCollection({
		loader: glob({
			base: './src/content/guides',
			pattern: markdownPattern,
		}),
		schema: guides.schema,
	}),
	lessons: defineCollection({
		loader: glob({
			base: './src/content/lessons',
			pattern: markdownPattern,
		}),
		schema: lessons.schema,
	}),
	os: defineCollection({
		loader: glob({
			base: './src/content/os',
			pattern: markdownPattern,
		}),
		schema: os.schema,
	}),
	posts: defineCollection({
		loader: glob({
			base: './src/content/posts',
			pattern: markdownPattern,
		}),
		schema: posts.schema,
	}),
	projects: defineCollection({
		loader: glob({
			base: './src/content/projects',
			pattern: markdownPattern,
		}),
		schema: projects.schema,
	}),
	recipes: defineCollection({
		loader: glob({
			base: './src/content/recipes',
			pattern: markdownPattern,
		}),
		schema: recipes.schema,
	}),
	uses: defineCollection({
		loader: glob({
			base: './src/content/uses',
			pattern: markdownPattern,
		}),
		schema: uses.schema,
	}),
}
