import { useState } from "react"

function PostCard(props) {

  const [likes, setLikes] = useState(0)

  return (
    <div className="card">

      <div className="card-header">

        <span className="tag">
          {props.category}
        </span>

      </div>

      <h2>{props.title}</h2>

      <p>{props.content}</p>

      <div className="card-footer">

        <p>❤️ {likes} Likes</p>

        <button
          className="btn"
          onClick={() => setLikes(likes + 1)}
        >
          Like
        </button>
        <button
      className="btn-danger"
      onClick={() =>
        props.deletePost(props.id)
      }
    >
      Delete
    </button>

      </div>

    </div>
  )
}

export default PostCard