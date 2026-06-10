import { useState } from "react"

import Navbar from "../components/Navbar"
import AssignmentCard from "../components/AssignmentCard"
import CreateAssignmentForm from "../components/CreateAssignmentForm"

function AssignmentsPage() {

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "30 Minute Walk",
      description: "Walk outside for 30 minutes.",
      assignedTo: "Student001",
      dueDate: "2026-06-20",
    },
  ])

  function addAssignment(newAssignment) {

    setAssignments([
      ...assignments,
      {
        ...newAssignment,
        id: assignments.length + 1,
      },
    ])
  }
  function deleteAssignment(id) {

  const updatedAssignments =
    assignments.filter(
      assignment => assignment.id !== id
    )

  setAssignments(updatedAssignments)
}

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Navbar />

      <h1>Assignments</h1>

      <CreateAssignmentForm
        addAssignment={addAssignment}
      />

      {assignments.map((assignment) => (
      <AssignmentCard
        key={assignment.id}
        id={assignment.id}
        title={assignment.title}
        description={assignment.description}
        assignedTo={assignment.assignedTo}
        dueDate={assignment.dueDate}
        deleteAssignment={deleteAssignment}
      />
      ))}
    </div>
  )
  
}

export default AssignmentsPage