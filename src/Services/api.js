const API_URL =
  "http://localhost:3000"

export async function login() {

  console.log("Login API")

  return {
    token: "sample-jwt-token"
  }
}

export async function getAssignments() {

  console.log("Get Assignments")

  return []
}

export async function createAssignment(data) {

  console.log("Create Assignment")

  return data
}