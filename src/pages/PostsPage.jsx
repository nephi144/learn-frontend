import { useState, useEffect } from "react"

import Navbar from "../components/Navbar"
import PostCard from "../components/PostCard"
import CreatePostForm from "../components/CreatePostForm"


function PostsPage() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="container">
        <Navbar />
        <h2>Loading Posts...</h2>
      </div>
    )
  }

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

    <div className="page-header">

      <h1 className="page-title">
        🌿 Wellness Posts
      </h1>

      <p className="page-description">
        Share wellness tips, mindfulness activities,
        and mental health resources with students.
      </p>

    </div>

    <CreatePostForm addPost={addPost} />

    <div className="posts-grid">

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          category={post.category}
        />
      ))}

    </div>

  </div>
)
}

export default PostsPage