function AssignmentCard(props) {
  return (
    <div className="card">

      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <p>
        <strong>Assigned To:</strong>
        {" "}
        {props.assignedTo}
      </p>

      <p>
        <strong>Due Date:</strong>
        {" "}
        {props.dueDate}
      </p>

      <button
        className="btn"
        onClick={() => props.deleteAssignment(props.id)}
      >
        Delete
      </button>

    </div>
  )
}

export default AssignmentCard