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
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >

      <h2>{props.title}</h2>

      <p>{props.content}</p>

      <span
        style={{
          backgroundColor: "#dbeafe",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        {props.category}
      </span>

      <p>Likes: {likes}</p>

      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Like 👍
      </button>

    </div>
  )
}

export default PostCard