import { useState } from "react"
import ProfileCard from "./components/ProfileCard"
import Counter from "./components/Counter"
import PostCard from "./components/PostCard"
import CreatePostForm from "./components/CreatePostForm"


const colors = {
  pageBg: "#f0f4f8",       // soft blue-grey — gives cards something to "float" on
  cardBg: "#ffffff",        // white cards pop against the page background
  primary: "#3b82f6",       // calm blue — used for primary actions
  success: "#10b981",       // green — used for create/submit
  text: "#1e293b",          // near-black — easy to read, not harsh
  textLight: "#64748b",     // muted grey — for secondary info
  border: "#e2e8f0",        // subtle border — defines structure without weight
}

// DESIGN CONCEPT: "style objects"
// Instead of writing styles inline on every element, we group related styles together.
// This makes your code cleaner and your styles reusable.
const styles = {
  // The outermost page wrapper
  page: {
    backgroundColor: colors.pageBg,
    minHeight: "100vh",          // fills the entire browser window height
    padding: "40px 20px",        // breathing room top/bottom and sides
    fontFamily: "'Segoe UI', Arial, sans-serif",  // clean, modern font stack
  },

  // The centered content column — keeps content readable on wide screens
  container: {
    maxWidth: "720px",            // research shows ~60-80 chars per line is most readable
    margin: "0 auto",             // auto left+right margin = centered
  },

  // Page header section
  header: {
    marginBottom: "32px",
    borderBottom: `2px solid ${colors.border}`,
    paddingBottom: "24px",
  },

  // Main page title
  pageTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: colors.text,
    margin: "0 0 6px 0",
  },

  // Subtitle under the title
  pageSubtitle: {
    fontSize: "15px",
    color: colors.textLight,
    margin: 0,
  },

  // Section headings inside the page
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: colors.text,
    margin: "0 0 16px 0",
  },

  divider: {
    border: "none",
    borderTop: `1px solid ${colors.border}`,
    margin: "32px 0",
  },
}

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Take a Deep Breath",
      content: "Pause for 5 minutes and focus on breathing.",
      category: "Mindfulness",
    },
    {
      id: 2,
      title: "Sleep Early",
      content: "Try getting 7–8 hours of sleep tonight.",
      category: "Sleep",
    },
    {
      id: 3,
      title: "Take a Walk",
      content: "Go outside for a 10-minute walk.",
      category: "Exercise",
    },
  ])

  function addPost(newPost) {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }])
  }

  return (
    // DESIGN CONCEPT: "wrapper + container" pattern
    // The outer div sets the PAGE background and padding.
    // The inner div centers and constrains the content width.
    // This two-layer approach is used in almost every real web app.
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Page Header */}
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>🌿 Wellness Hub</h1>
          <p style={styles.pageSubtitle}>A calm space for counselors and students</p>
        </div>

        {/* Week 2 Practice Components */}
        <h2 style={styles.sectionTitle}>Week 2 Practice</h2>
        <Counter />
        <ProfileCard
          name="Mark Nephi Simene"
          major="Computer Science"
          school="BYU-Hawaii"
        />

        <hr style={styles.divider} />

        {/* Wellness Posts Section */}
        <h2 style={styles.sectionTitle}>Counselor Wellness Posts</h2>
        <CreatePostForm addPost={addPost} />

        {/* DESIGN CONCEPT: spacing between form and posts list */}
        <div style={{ marginTop: "24px" }}>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              category={post.category}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
