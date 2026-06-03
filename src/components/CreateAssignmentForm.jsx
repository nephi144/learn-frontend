import { useState } from "react"

function CreateAssignmentForm({ addAssignment }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [assignedTo, setAssignedTo] = useState("")
  const [dueDate, setDueDate] = useState("")

  function handleSubmit(event) {

    event.preventDefault()

    addAssignment({
      title,
      description,
      assignedTo,
      dueDate,
    })

    setTitle("")
    setDescription("")
    setAssignedTo("")
    setDueDate("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Create Assignment</h2>

      <input
        type="text"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Student ID"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Create Assignment
      </button>
    </form>
  )
}

export default CreateAssignmentForm