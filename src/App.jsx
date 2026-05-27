import ProfileCard from "./ProfileCard"
import Counter from "./Counter"

import PostCard from "./components/PostCard"

function App() {

  const posts = [
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

    {
      id: 3,
      title: "Take a Walk",
      content: "Go outside for a 10-minute walk.",
      category: "Exercise",
    },
  ]

  return (
<div>
  <h1>Counselor Wellness Posts</h1>

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

export default App