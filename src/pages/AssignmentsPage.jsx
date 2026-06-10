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

function editAssignment(id) {

  const updatedAssignments =
    assignments.map(
      assignment => {

        if (
          assignment.id === id
        ) {

          return {
            ...assignment,
            title:
              assignment.title +
              " (Edited)"
          }
        }

        return assignment
      }
    )

  setAssignments(updatedAssignments)
}
return (
  <div className="container">

    <Navbar />

<div className="page-header">

  <h1 className="page-title">
    🎯 Student Assignments
  </h1>

  <p className="page-description">
    Create wellness activities and monitor student participation.
  </p>

</div>

<CreateAssignmentForm
  addAssignment={addAssignment}
/>

<h2 className="section-title">
  Active Assignments
</h2>

<div className="posts-grid">

  {assignments.map((assignment) => (
    <AssignmentCard
      key={assignment.id}
      id={assignment.id}
      title={assignment.title}
      description={assignment.description}
      assignedTo={assignment.assignedTo}
      dueDate={assignment.dueDate}
      deleteAssignment={deleteAssignment}
      editAssignment={editAssignment}
    />
  ))}

</div>

  </div>
)
  
}

export default AssignmentsPage