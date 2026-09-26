import "./StudentDashboard.css";

function StudentDashboard({ setPage }) {
  return (
    <div className="dashboard-page">
       <nav className="dashboard-nav">
  <button onClick={() => setPage("dashboard")}>
    🏠 Dashboard
  </button>

  <button onClick={() => setPage("chat")}>
    🤖 AI Chat
  </button>

  <button onClick={() => setPage("requests")}>
    📋 My Requests
  </button>

  <button onClick={() => setPage("request")}>
    📝 Submit Request
  </button>

  <button onClick={() => setPage("profile")}>
    👤 Profile
  </button>
  <button onClick={() => setPage("home")}>
  🚪 Logout
</button>
</nav> 

      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h1>Campus Care <span>AI</span></h1>
          <p>Student Dashboard</p>
        </div>

       <button
  className="dashboard-profile"
  onClick={() => setPage("profile")}
>
  👤
</button>
      </header>

      {/* Welcome */}
      <section className="welcome-section">
        <div>
          <p className="welcome-small">Welcome back 👋</p>
          <h2>How can we help you today?</h2>
          <p>
            Get support, submit requests, and connect with Campus Care AI.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="dashboard-section">
        <h3>Quick Actions</h3>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <div className="card-icon">🤖</div>
            <h4>AI Assistant</h4>
            <p>Ask questions and get instant support.</p>
            <button onClick={() => setPage("chat")}>
  Start Chat →
</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📝</div>
            <h4>Submit Request</h4>
            <p>Report an issue or submit a campus request.</p>
            <button onClick={() => setPage("request")}>
  Submit Request →
</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📋</div>
            <h4>My Requests</h4>
            <p>Track the status of your submitted requests.</p>
            <button onClick={() => setPage("requests")}>
  View Requests →
</button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default StudentDashboard;