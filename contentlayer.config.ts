import { kv } from '@vercel/kv'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: "string", required: true},
    featuredImage: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    slug: { type: 'string', resolve: (post) => post._raw.flattenedPath},
    // views: {type: 'string', resolve: (post) => kv.get(`${post._raw.flattenedPath}:views`)}
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })