import { useState } from "react"

function CreatePostForm({ addPost }) {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")

  function handleSubmit(event) {

    event.preventDefault()

    const newPost = {
      title,
      content,
      category,
    }

    addPost(newPost)

    setTitle("")
    setContent("")
    setCategory("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
        backgroundColor: "#f9fafb",
      }}
    >

      <h2>Create Wellness Post</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          height: "100px",
        }}
      />

      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Create Post
      </button>

    </form>
  )
}

export default CreatePostForm