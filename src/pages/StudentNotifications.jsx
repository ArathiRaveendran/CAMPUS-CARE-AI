import "./StudentNotifications.css";

function StudentNotifications({ setPage }) {
  const notifications = [
    {
      id: 1,
      icon: "🔄",
      title: "Request Status Updated",
      message: "Your Wi-Fi connection complaint is now In Progress.",
      time: "10 minutes ago",
    },
    {
      id: 2,
      icon: "🤖",
      title: "AI Analysis Completed",
      message: "Your complaint has been classified as Internet / IT with High priority.",
      time: "1 hour ago",
    },
    {
      id: 3,
      icon: "✓",
      title: "Complaint Resolved",
      message: "Your previous complaint has been marked as Resolved.",
      time: "Yesterday",
    },
  ];

  return (
    <div className="student-notifications-page">

      {/* Header */}
      <header className="notifications-header">

        <button
          className="back-dashboard"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Dashboard
        </button>

        <div>
          <h1>Notifications</h1>
          <p>Stay updated about your complaints and requests.</p>
        </div>

      </header>


      {/* Notifications */}
      <section className="notifications-container">

        {notifications.map((notification) => (
          <div
            className="notification-card"
            key={notification.id}
          >

            <div className="notification-icon">
              {notification.icon}
            </div>

            <div className="notification-content">

              <h3>{notification.title}</h3>

              <p>{notification.message}</p>

              <span>{notification.time}</span>

            </div>

          </div>
        ))}

      </section>

    </div>
  );
}

export default StudentNotifications;