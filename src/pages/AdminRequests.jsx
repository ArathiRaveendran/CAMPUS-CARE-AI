import { useState } from "react";
import "./AdminRequests.css";

function AdminRequests({ setPage }) {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const requests = [
    {
      id: "REQ001",
      student: "Arun Kumar",
      category: "Academic",
      date: "24 Sep 2026",
      priority: "High",
      status: "Pending"
    },
    {
      id: "REQ002",
      student: "Anjali Nair",
      category: "Hostel",
      date: "23 Sep 2026",
      priority: "Medium",
      status: "In Progress"
    },
    {
      id: "REQ003",
      student: "Rahul Das",
      category: "Technical",
      date: "22 Sep 2026",
      priority: "Low",
      status: "Resolved"
    },
    {
      id: "REQ004",
      student: "Meera Joseph",
      category: "Counselling",
      date: "21 Sep 2026",
      priority: "High",
      status: "Pending"
    }
  ];

  const filteredRequests = requests.filter((request) => {

    const matchesSearch =
      request.id.toLowerCase().includes(search.toLowerCase()) ||
      request.student.toLowerCase().includes(search.toLowerCase()) ||
      request.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      request.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-requests-page">

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
          type="button"
          onClick={() => setPage("admin-staff")}
        >
          🛡️ Staff
        </button>

        <button
          className="active"
          type="button"
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
      <header className="admin-requests-header">

        <div>
          <h1>
            Campus Care <span>AI</span>
          </h1>

          <p>Request Management</p>
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

      {/* Content */}
      <main className="admin-requests-content">

        <div className="admin-requests-title">

          <div>
            <h2>Support Requests</h2>

            <p>
              Monitor and manage all student support requests.
            </p>
          </div>

          <div className="request-count">
            {filteredRequests.length} Requests
          </div>

        </div>

        {/* Filters */}
        <div className="admin-request-filters">

          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>

        </div>

        {/* Requests Table */}
        <div className="admin-requests-table">

          <div className="request-table-header">
            <span>Request ID</span>
            <span>Student</span>
            <span>Category</span>
            <span>Date</span>
            <span>Priority</span>
            <span>Status</span>
          </div>

          {filteredRequests.map((request) => (
            <div
              className="request-table-row"
              key={request.id}
            >

              <span>{request.id}</span>

              <span>{request.student}</span>

              <span>{request.category}</span>

              <span>{request.date}</span>

              <span>
                <strong
                  className={`priority-badge ${request.priority
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {request.priority}
                </strong>
              </span>

              <span>
                <strong
                  className={`request-status ${request.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {request.status}
                </strong>
              </span>

            </div>
          ))}

          {filteredRequests.length === 0 && (
            <div className="no-requests">
              No requests found.
            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default AdminRequests;