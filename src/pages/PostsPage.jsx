import { useState } from "react"

import Navbar from "../components/Navbar"
import PostCard from "../components/PostCard"
import CreatePostForm from "../components/CreatePostForm"

function PostsPage() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Take a Deep Breath",
      content: "Pause for 5 minutes and focus on breathing.",
      category: "Mindfulness",
    },

    {
      id: 2,
      title: "Sleep Early",
      content: "Try getting 7–8 hours of sleep tonight.",
      category: "Sleep",
    },
  ])

  function addPost(newPost) {
    setPosts([
      ...posts,
      {
        ...newPost,
        id: posts.length + 1,
      },
    ])
  }

  return (
    <div className="container">

      <Navbar />

      <h1 className="page-title">
        Counselor Wellness Posts
      </h1>

      <CreatePostForm addPost={addPost} />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          category={post.category}
        />
      ))}

    </div>
  )
}

export default PostsPage