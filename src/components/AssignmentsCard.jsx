function AssignmentCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "10px",
        backgroundColor: "#f9fafb",
      }}
    >
      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <p>
        <strong>Assigned To:</strong> {props.assignedTo}
      </p>

      <p>
        <strong>Due Date:</strong> {props.dueDate}
      </p>
    </div>
  )
}

export default AssignmentCard