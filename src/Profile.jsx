function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <p>{props.major}</p>

      <p>{props.school}</p>
    </div>
  )
}

export default ProfileCard