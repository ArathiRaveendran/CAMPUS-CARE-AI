import { useState } from "react";
import "./StaffProfile.css";

function StaffProfile({ setPage }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Alex Staff");
  const [email, setEmail] = useState("staff@college.edu");
  return (
    <div className="staff-profile-page">

      <div className="staff-profile-card">
        <button
  className="back-dashboard-button"
  onClick={() => setPage("staff-dashboard")}
  type="button"
>
  ← Back to Dashboard
</button>

        <div className="staff-profile-avatar">
          👤
        </div>

        <h1>Staff Profile</h1>

        <p className="staff-profile-subtitle">
          Manage your staff information
        </p>

        <div className="staff-profile-info">

          <div className="staff-profile-field">
            <span>Staff Name</span>
           {editing ? (
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
) : (
  <strong>{name}</strong>
)}
          </div>

          <div className="staff-profile-field">
            <span>Staff ID</span>
            <strong>STAFF2026001</strong>
          </div>

          <div className="staff-profile-field">
            <span>Email</span>
            {editing ? (
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
) : (
  <strong>{email}</strong>
)}
          </div>

          <div className="staff-profile-field">
            <span>Department</span>
            <strong>Student Support</strong>
          </div>

          <div className="staff-profile-field">
            <span>Role</span>
            <strong>Support Staff</strong>
          </div>

        </div>

       <button
  className="staff-edit-profile"
  onClick={() => setEditing(!editing)}
>
  {editing ? "Save Profile" : "Edit Profile"}
</button>
      </div>

    </div>
  );
}

export default StaffProfile;