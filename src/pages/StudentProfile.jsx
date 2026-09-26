import "./StudentProfile.css";

function StudentProfile({ setPage }) {
  return (
    <div className="profile-page">

      <div className="profile-card">
        <button
  className="back-dashboard-button"
  onClick={() => setPage("dashboard")}
  type="button"
>
  ← Back to Dashboard
</button>

        <div className="profile-avatar">
          👤
        </div>

        <h1>Student Profile</h1>
        <p className="profile-subtitle">
          Manage your student information
        </p>

        <div className="profile-info">

          <div className="profile-field">
            <span>Student Name</span>
            <strong>John Student</strong>
          </div>

          <div className="profile-field">
            <span>Student ID</span>
            <strong>STU2026001</strong>
          </div>

          <div className="profile-field">
            <span>Email</span>
            <strong>student@college.edu</strong>
          </div>

          <div className="profile-field">
            <span>Department</span>
            <strong>Computer Science</strong>
          </div>

          <div className="profile-field">
            <span>Phone</span>
            <strong>+91 98765 43210</strong>
          </div>

        </div>

        <button className="edit-profile">
          Edit Profile
        </button>

      </div>

    </div>
  );
}

export default StudentProfile;