import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AssignmentsPage from "./pages/AssignmentsPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/posts"
          element={<PostsPage />}
        />

        <Route
          path="/assignments"
          element={<AssignmentsPage />}
        />
        <Route
  path="/login"
  element={<LoginPage />}
/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App