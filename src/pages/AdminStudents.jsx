import { useState } from "react";
import "./AdminStudents.css";

function AdminStudents({ setPage }) {

  const [search, setSearch] = useState("");

  const students = [
    {
      id: "STU001",
      name: "Arun Kumar",
      department: "Computer Science",
      year: "3rd Year",
      email: "arun@example.com"
    },
    {
      id: "STU002",
      name: "Anjali Nair",
      department: "Information Technology",
      year: "2nd Year",
      email: "anjali@example.com"
    },
    {
      id: "STU003",
      name: "Rahul Das",
      department: "Mechanical Engineering",
      year: "4th Year",
      email: "rahul@example.com"
    },
    {
      id: "STU004",
      name: "Meera Joseph",
      department: "Civil Engineering",
      year: "1st Year",
      email: "meera@example.com"
    }
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.id.toLowerCase().includes(search.toLowerCase()) ||
    student.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-students-page">

      <nav className="admin-dashboard-nav">

        <button onClick={() => setPage("admin-dashboard")}>
          🏠 Dashboard
        </button>

        <button className="active">
          👥 Students
        </button>

        <button onClick={() => setPage("admin-staff")}>
          🛡️ Staff
        </button>

        <button onClick={() => setPage("admin-requests")}>
          📋 Requests
        </button>

        <button onClick={() => setPage("admin-reports")}>
          📊 Reports
        </button>

        <button onClick={() => setPage("admin-profile")}>
          👤 Profile
        </button>

        <button onClick={() => setPage("home")}>
          🚪 Logout
        </button>

      </nav>

      <header className="admin-students-header">

        <div>
          <h1>
            Campus Care <span>AI</span>
          </h1>

          <p>Student Management</p>
        </div>

        <button
          className="admin-profile-icon"
          onClick={() => setPage("admin-profile")}
          type="button"
        >
          👤
        </button>

      </header>
      <button
  className="back-dashboard-button"
  onClick={() => setPage("admin-dashboard")}
  type="button"
>
  ← Back to Dashboard
</button>

      <main className="admin-students-content">

        <div className="admin-students-title">
          <div>
            <h2>Students</h2>
            <p>View and manage registered students.</p>
          </div>

          <div className="student-count">
            {filteredStudents.length} Students
          </div>
        </div>

        <div className="admin-students-search">

          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="admin-students-table">

          <div className="student-table-header">
            <span>Student ID</span>
            <span>Name</span>
            <span>Department</span>
            <span>Year</span>
            <span>Email</span>
          </div>

          {filteredStudents.map((student) => (
            <div
              className="student-table-row"
              key={student.id}
            >
              <span>{student.id}</span>
              <span>{student.name}</span>
              <span>{student.department}</span>
              <span>{student.year}</span>
              <span>{student.email}</span>
            </div>
          ))}

          {filteredStudents.length === 0 && (
            <div className="no-students">
              No students found.
            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default AdminStudents;