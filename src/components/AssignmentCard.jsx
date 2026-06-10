function AssignmentCard(props) {

  return (
    <div className="card">

      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <div className="assignment-info">

        <p>
          👤 {props.assignedTo}
        </p>

        <p>
          📅 {props.dueDate}
        </p>

      </div>

      <div className="card-actions">

        <button
          className="btn"
          onClick={() =>
            props.editAssignment(props.id)
          }
        >
          Edit
        </button>

        <button
          className="btn-danger"
          onClick={() =>
            props.deleteAssignment(props.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default AssignmentCard