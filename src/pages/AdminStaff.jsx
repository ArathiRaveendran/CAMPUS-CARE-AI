import { useState } from "react";
import "./AdminStaff.css";

function AdminStaff({ setPage }) {

  const [search, setSearch] = useState("");

  const staff = [
    {
      id: "STF001",
      name: "Dr. Anil Kumar",
      department: "Student Affairs",
      role: "Counselor",
      email: "anil@example.com",
      status: "Active"
    },
    {
      id: "STF002",
      name: "Ms. Priya Nair",
      department: "IT Support",
      role: "Support Staff",
      email: "priya@example.com",
      status: "Active"
    },
    {
      id: "STF003",
      name: "Mr. Rahul Menon",
      department: "Administration",
      role: "Administrator",
      email: "rahul@example.com",
      status: "Active"
    },
    {
      id: "STF004",
      name: "Ms. Sneha Joseph",
      department: "Student Affairs",
      role: "Support Staff",
      email: "sneha@example.com",
      status: "Inactive"
    }
  ];

  const filteredStaff = staff.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.id.toLowerCase().includes(search.toLowerCase()) ||
    member.department.toLowerCase().includes(search.toLowerCase()) ||
    member.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-staff-page">

      {/* Navigation */}
      <nav className="admin-dashboard-nav">

        <button
          type="button"
          onClick={() => setPage("admin-dashboard")}
        >
          🏠 Dashboard
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-students")}
        >
          👥 Students
        </button>

        <button
          className="active"
          type="button"
        >
          🛡️ Staff
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-requests")}
        >
          📋 Requests
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-reports")}
        >
          📊 Reports
        </button>

        <button
          type="button"
          onClick={() => setPage("admin-profile")}
        >
          👤 Profile
        </button>

        <button
          type="button"
          onClick={() => setPage("home")}
        >
          🚪 Logout
        </button>

      </nav>

      {/* Header */}
      <header className="admin-staff-header">

        <div>
          <h1>
            Campus Care <span>AI</span>
          </h1>

          <p>Staff Management</p>
        </div>

        <button
          className="admin-profile-icon"
          type="button"
          onClick={() => setPage("admin-profile")}
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

      {/* Main Content */}
      <main className="admin-staff-content">

        <div className="admin-staff-title">

          <div>
            <h2>Staff Members</h2>

            <p>
              View and manage campus staff members.
            </p>
          </div>

          <div className="staff-count">
            {filteredStaff.length} Staff
          </div>

        </div>

        {/* Search */}
        <div className="admin-staff-search">

          <input
            type="text"
            placeholder="Search staff..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Staff Table */}
        <div className="admin-staff-table">

          <div className="staff-table-header">
            <span>Staff ID</span>
            <span>Name</span>
            <span>Department</span>
            <span>Role</span>
            <span>Email</span>
            <span>Status</span>
          </div>

          {filteredStaff.map((member) => (
            <div
              className="staff-table-row"
              key={member.id}
            >

              <span>{member.id}</span>

              <span>{member.name}</span>

              <span>{member.department}</span>

              <span>{member.role}</span>

              <span>{member.email}</span>

              <span>
                <strong
                  className={
                    member.status === "Active"
                      ? "staff-status active-status"
                      : "staff-status inactive-status"
                  }
                >
                  {member.status}
                </strong>
              </span>

            </div>
          ))}

          {filteredStaff.length === 0 && (
            <div className="no-staff">
              No staff members found.
            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default AdminStaff;