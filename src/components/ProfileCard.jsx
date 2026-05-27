function ProfileCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>{props.name}</h2>

      <p>{props.major}</p>

      <p>{props.school}</p>
    </div>
  )
}

export default ProfileCard