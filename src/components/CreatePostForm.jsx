import { useState } from "react"

function CreatePostForm() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Create Wellness Post</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      <br />
      <br />

      <button>Create Post</button>

      <hr />

      <h3>Preview</h3>

      <p><strong>Title:</strong> {title}</p>

      <p><strong>Content:</strong> {content}</p>

      <p><strong>Category:</strong> {category}</p>
    </div>
  )
}

export default CreatePostForm