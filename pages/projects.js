import { clientConfig } from '@/lib/server/config'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllProjectPosts } from '@/lib/notion'
import { useConfig } from '@/lib/config'
import ProjectPost from "@/components/ProjectPost";

export async function getStaticProps () {
  const posts = await getAllProjectPosts({ includePages: false })
  const postsToShow = posts.slice(0, clientConfig.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > clientConfig.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

export default function Project ({ postsToShow, page, showNext }) {
  const { title, description } = useConfig()

  return (
    <Container title={title} description={description}>
      {postsToShow.map(post => (
        <ProjectPost key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}
