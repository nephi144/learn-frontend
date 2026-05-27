import { useState } from "react"

function PostCard(props) {

  const [likes, setLikes] = useState(0)

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "10px",
        backgroundColor: "#f9fafb",
      }}
    >
      <h2>{props.title}</h2>

      <p>{props.content}</p>

      <span>{props.category}</span>

      <p>Likes: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>
    </div>
  )
}

export default PostCard