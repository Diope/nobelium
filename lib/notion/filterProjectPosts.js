export default function filterProjectPosts({ posts, includePages }) {
  if (!posts || !posts.length) return []
  return posts
    .filter(post =>
      includePages
        ? post?.type?.[0] === 'Project' || post?.type?.[0] === 'Page'
        : post?.type?.[0] === 'Project'
    )
    .filter(post =>
      post.title &&
      post.slug &&
      post?.status?.[0] === 'Published' &&
      post.date <= new Date()
    )
}
