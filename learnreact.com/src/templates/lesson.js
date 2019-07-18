import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { course, lesson } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>{lesson.title}</h1> <Link to="/">Back to Courses</Link>
    <ul>
      {course.lessons.map(lesson => (
        <li key={lesson.slug}>{lesson.title}</li>
      ))}
    </ul>
  </div>
)
