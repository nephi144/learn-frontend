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
      className="form-card"
    >

      <h2>Create Wellness Assignment</h2>

      <p className="form-subtitle">
        Assign wellness activities to students and
        encourage healthy habits.
      </p>

      <label>
        Assignment Title
      </label>

      <input
        type="text"
        placeholder="Example: 30 Minute Walk"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>
        Description
      </label>

      <textarea
        placeholder="Describe the assignment..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>
        Student ID
      </label>

      <input
        type="text"
        placeholder="Student001"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />

      <label>
        Due Date
      </label>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button
        type="submit"
        className="btn"
      >
        Create Assignment
      </button>

    </form>
  )
}

export default CreateAssignmentForm