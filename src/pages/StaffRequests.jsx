import { useState } from "react";
import "./StaffRequests.css";

function StaffRequests({ setPage }) {
  const [filter, setFilter] = useState("All");
  const requests = [
    {
      id: "REQ001",
      student: "John Student",
      type: "Technical Issue",
      subject: "Wi-Fi connection problem",
      priority: "High",
      status: "Pending",
      date: "26/09/2026",
    },
    {
      id: "REQ002",
      student: "Anu Thomas",
      type: "Academic Support",
      subject: "Need help with course registration",
      priority: "Normal",
      status: "In Progress",
      date: "25/09/2026",
    },
    {
      id: "REQ003",
      student: "Rahul Kumar",
      type: "Hostel / Accommodation",
      subject: "Room maintenance request",
      priority: "Urgent",
      status: "Pending",
      date: "24/09/2026",
    },
    {
      id: "REQ004",
      student: "Meera Nair",
      type: "Facilities",
      subject: "Classroom projector issue",
      priority: "Normal",
      status: "Resolved",
      date: "23/09/2026",
    },
  ];

  return (
    <div className="staff-requests-page">

      <div className="staff-requests-header">
        <div>
          <h1>Student Requests</h1>
          <p>Review and manage student support requests.</p>
        </div>

        <div className="request-count">
          {requests.length} Requests
        </div>
           </div>

<button
  className="back-dashboard-button"
  onClick={() => setPage("staff-dashboard")}
  type="button"
>
  ← Back to Dashboard
</button>

<div className="request-filters"></div>
           
      <div className="request-filters">

        <button
          className={filter === "All" ? "filter-active" : ""}
          onClick={() => setFilter("All")}
        >
          All Requests
        </button>

        <button
          className={filter === "Pending" ? "filter-active" : ""}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>

        <button
          className={filter === "In Progress" ? "filter-active" : ""}
          onClick={() => setFilter("In Progress")}
        >
          In Progress
        </button>

        <button
          className={filter === "Resolved" ? "filter-active" : ""}
          onClick={() => setFilter("Resolved")}
        >
          Resolved
        </button>

      </div>

      <div className="staff-requests-list">

        {requests
  .filter((request) => {
    if (filter === "All") return true;
    return request.status === filter;
  })
  .map((request) => (
          <div className="staff-request-card" key={request.id}>

            <div className="request-top">

              <div>
                <span className="request-id">
                  {request.id}
                </span>

                <h2>{request.subject}</h2>

                <p>
                  {request.student} • {request.type}
                </p>
              </div>

              <span
                className={`request-status ${request.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {request.status}
              </span>

            </div>

            <div className="request-bottom">

              <div className="request-info">
                <span>
                  Priority: <strong>{request.priority}</strong>
                </span>

                <span>
                  Submitted: {request.date}
                </span>
              </div>

              <button
  className="view-request"
  onClick={() => setPage("staff-request-details")}
>
  View Details →
</button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default StaffRequests;