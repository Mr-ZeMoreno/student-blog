import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import node from '@astrojs/node'

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          // Katex plugin options
        },
      ],
    ],
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
})
