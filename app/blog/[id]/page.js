// app/blog/[id]/page.js
import BlogDetails from '../../../components/BlogDetails'
import CommentList from '../../../components/CommentList'
import AddComment from '../../../components/AddComment'

export default async function BlogPage({ params }) {
  const { id } = await params  // ← await params

  return (
    <main>
      <BlogDetails id={id} />
      <CommentList id={id} />
      <AddComment id={id} />
    </main>
  )
}