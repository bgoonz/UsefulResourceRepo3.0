import { getPostsByCategory, getSortedPosts } from '@/root/utils/helpers/posts'
import { Category } from '@/root/components/screens/Category'

interface PageProps {
  category: string
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

export default function DesignPage({ category, posts }: PageProps) {
  return <Category category={category} posts={posts} title={category} />
}

export async function getStaticProps() {
  const filteredPosts = getPostsByCategory('design')

  return {
    props: {
      category: 'Design',
      posts: getSortedPosts(filteredPosts),
    },
  }
}
