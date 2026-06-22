import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const blog = await getCollection('blog', ({ data }) => !data.draft);
const projects = await getCollection('projects');

type PageMeta = {
  title: string;
  description: string;
  tags?: string[];
};

const pages: Record<string, PageMeta> = Object.fromEntries([
  ...blog.map((entry) => [
    `blog/${entry.id}`,
    {
      title: entry.data.title,
      description: entry.data.description,
      tags: entry.data.tags,
    } as PageMeta,
  ]),
  ...projects.map((entry) => [
    `projects/${entry.id}`,
    {
      title: entry.data.title,
      description: entry.data.description,
      tags: entry.data.tags,
    } as PageMeta,
  ]),
]);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [11, 16, 32],
      [10, 18, 40],
    ],
    border: {
      color: [125, 211, 252],
      width: 10,
      side: 'inline-start',
    },
    padding: 72,
    font: {
      title: {
        size: 68,
        weight: 'SemiBold',
        color: [226, 232, 240],
        families: ['Inter'],
      },
      description: {
        size: 28,
        weight: 'Normal',
        color: [148, 163, 184],
        families: ['Inter'],
        lineHeight: 1.4,
      },
    },
    fonts: [
      'https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff',
      'https://fonts.bunny.net/inter/files/inter-latin-600-normal.woff',
    ],
  }),
});
