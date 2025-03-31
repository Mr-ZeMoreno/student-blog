import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const collectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  nav: z
    .object({
      next: z.string().optional(),
      back: z.string().optional(),
    })
    .optional(),
});

const libros = defineCollection({
  loader: glob({ base: "./src/content/libros", pattern: "**/*.{md,mdx}" }),
  schema: collectionSchema,
});

const asignaturas = defineCollection({
  loader: glob({
    base: "./src/content/asignaturas",
    pattern: "**/*.{md,mdx}",
  }),
  schema: collectionSchema,
});

const colecciones = defineCollection({
  loader: glob({
    base: "./src/content/",
    pattern: "**/index.{md,mdx}",
  }),
  schema: collectionSchema,
});

export const collections = {
  libros,
  asignaturas,
  colecciones,
};
