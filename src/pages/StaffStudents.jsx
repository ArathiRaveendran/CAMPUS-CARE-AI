import { useState } from "react";
import "./StaffStudents.css";

function StaffStudents({ setPage }) {
    const [search, setSearch] = useState("");
  const students = [
    {
      id: "STU2026001",
      name: "John Student",
      department: "Computer Science",
      email: "john@college.edu",
      requests: 4,
      status: "Active",
    },
    {
      id: "STU2026002",
      name: "Anu Thomas",
      department: "Computer Science",
      email: "anu@college.edu",
      requests: 2,
      status: "Active",
    },
    {
      id: "STU2026003",
      name: "Rahul Kumar",
      department: "Information Technology",
      email: "rahul@college.edu",
      requests: 5,
      status: "Active",
    },
    {
      id: "STU2026004",
      name: "Meera Nair",
      department: "Electronics",
      email: "meera@college.edu",
      requests: 1,
      status: "Active",
    },
  ];

  return (
    <div className="staff-students-page">

      <div className="staff-students-header">
        <div>
          <h1>Students</h1>
          <p>View student information and support activity.</p>
        </div>

        <div className="student-count">
          {students.length} Students
        </div>
      </div>
      <button
  className="back-dashboard-button"
  onClick={() => setPage("staff-dashboard")}
  type="button"
>
  ← Back to Dashboard
</button>

      <div className="student-search">
        <input
  type="text"
  placeholder="Search students..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      </div>

      <div className="students-table-wrapper">

        <table className="students-table">

          <thead>
            <tr>
              <th>Student</th>
              <th>Student ID</th>
              <th>Department</th>
              <th>Email</th>
              <th>Requests</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students
  .filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.id.toLowerCase().includes(search.toLowerCase()) ||
    student.department.toLowerCase().includes(search.toLowerCase())
  )
  .map((student) => (
              <tr key={student.id}>

                <td>
                  <div className="student-name">
                    <div className="student-avatar">
                      👤
                    </div>

                    <strong>
                      {student.name}
                    </strong>
                  </div>
                </td>

                <td>{student.id}</td>

                <td>{student.department}</td>

                <td>{student.email}</td>

                <td>{student.requests}</td>

                <td>
                  <span className="student-status">
                    {student.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StaffStudents;