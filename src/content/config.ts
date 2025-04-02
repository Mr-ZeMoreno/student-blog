import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function transformHeroImage(heroImage: string | undefined): string {
  if (!heroImage) {
    return `/blog-placeholder-${getRandomInt(2, 6)}.jpg`
  }
  return heroImage || ''
}

const navSchema = z.object({
  next: z.string().optional(),
  back: z.string().optional(),
})

const collectionSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    nav: navSchema.optional(),
    construccion: z.boolean().optional(),
    isMath: z.boolean().optional(),
  })
  .transform((data) => {
    return {
      ...data,
      heroImage: transformHeroImage(data.heroImage),
    }
  })

const biblioteca = defineCollection({
  loader: glob({ base: './src/content/biblioteca', pattern: '**/*.{md,mdx}' }),
  schema: collectionSchema,
})

const asignaturas = defineCollection({
  loader: glob({
    base: './src/content/asignaturas',
    pattern: '**/*.{md,mdx}',
  }),
  schema: collectionSchema,
})

const colecciones = defineCollection({
  loader: glob({
    base: './src/content/',
    pattern: '**/index.{md,mdx}',
  }),
  schema: collectionSchema,
})

export const collections = {
  biblioteca,
  asignaturas,
  colecciones,
}
