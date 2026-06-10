import { useState } from "react"

function PostCard(props) {

  const [likes, setLikes] = useState(0)

  return (
    <div className="card">

      <h2>{props.title}</h2>

      <p>{props.content}</p>

      <span className="tag">
        {props.category}
      </span>

      <p>Likes: {likes}</p>

      <button
        className="btn"
        onClick={() => setLikes(likes + 1)}
      >
        Like 👍
      </button>

    </div>
  )
}

export default PostCard