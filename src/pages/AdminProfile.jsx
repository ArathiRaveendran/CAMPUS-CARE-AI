import { useState } from "react";
import "./AdminProfile.css";

function AdminProfile({ setPage }) {

  const [name, setName] = useState("Campus Administrator");
  const [email, setEmail] = useState("admin@campuscare.ai");
  const [editing, setEditing] = useState(false);

  return (
    <div className="admin-profile-page">

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
          className="active"
          type="button"
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

      <header className="admin-profile-header">

        <div>
          <h1>
            Campus Care <span>AI</span>
          </h1>

          <p>Admin Profile</p>
        </div>

        <button
          className="admin-profile-icon"
          type="button"
        >
          👤
        </button>

      </header>

      <main className="admin-profile-content">

        <div className="admin-profile-title">
          <h2>Profile Information</h2>

          <p>
            View and manage your administrator profile.
          </p>
        </div>

        <section className="admin-profile-card">

          <div className="admin-profile-avatar-large">
            👤
          </div>

          <div className="admin-profile-details">

            <div className="profile-field">
              <label>Admin ID</label>

              <div className="profile-value">
                ADM001
              </div>
            </div>

            <div className="profile-field">
              <label>Name</label>

              {editing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <div className="profile-value">
                  {name}
                </div>
              )}
            </div>

            <div className="profile-field">
              <label>Email</label>

              {editing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <div className="profile-value">
                  {email}
                </div>
              )}
            </div>

            <div className="profile-field">
              <label>Role</label>

              <div className="profile-value">
                Administrator
              </div>
            </div>

          </div>

          <div className="admin-profile-actions">

            <button
              className="profile-edit-button"
              type="button"
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Save Profile" : "Edit Profile"}
            </button>

            <button
              className="profile-dashboard-button"
              type="button"
              onClick={() => setPage("admin-dashboard")}
            >
              ← Back to Dashboard
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminProfile;