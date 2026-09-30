import "./App.css";
import collegeImage from "./assets/college.jpeg";
import StudentLogin from "./pages/StudentLogin";
import { useState } from "react";
import StudentDashboard from "./pages/StudentDashboard";
import AIChat from "./pages/AIChat";
import RequestPage from "./pages/RequestPage";
import MyRequests from "./pages/MyRequests";
import StudentProfile from "./pages/StudentProfile";
import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";
import StaffRequests from "./pages/StaffRequests";
import StaffStudents from "./pages/StaffStudents";
import StaffReports from "./pages/StaffReports";
import StaffProfile from "./pages/StaffProfile";
import StaffRequestDetails from "./pages/StaffRequestDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminStaff from "./pages/AdminStaff";
import AdminRequests from "./pages/AdminRequests";
import AdminReports from "./pages/AdminReports";
import AdminProfile from "./pages/AdminProfile";
import StudentNotifications from "./pages/StudentNotifications";

function App() {
  const [page, setPage] = useState("home");
const [requests, setRequests] = useState([]);
const [darkMode, setDarkMode] = useState(true);

  if (page === "login") {
 return <StudentLogin setPage={setPage} />;
}
if (page === "staff-login") {
  return <StaffLogin setPage={setPage} />;
}
if (page === "admin-login") {
  return <AdminLogin setPage={setPage} />;
}
if (page === "admin-dashboard") {
  return <AdminDashboard setPage={setPage} />;
}
if (page === "admin-students") {
  return <AdminStudents setPage={setPage} />;
}
if (page === "admin-staff") {
  return <AdminStaff setPage={setPage} />;
}
if (page === "admin-requests") {
  return <AdminRequests setPage={setPage} />;
}
if (page === "admin-reports") {
  return <AdminReports setPage={setPage} />;
}
if (page === "admin-profile") {
  return <AdminProfile setPage={setPage} />;
}
if (page === "staff-dashboard") {
  return <StaffDashboard setPage={setPage} />;
}
if (page === "staff-requests") {
  return <StaffRequests setPage={setPage} />;
}
if (page === "staff-request-details") {
  return <StaffRequestDetails setPage={setPage} />;
}
if (page === "staff-students") {
  return <StaffStudents setPage={setPage} />;
}
if (page === "staff-reports") {
  return <StaffReports setPage={setPage} />;
}
if (page === "staff-profile") {
  return <StaffProfile setPage={setPage} />;
}

if (page === "dashboard") {
  return <StudentDashboard setPage={setPage} />;
}
if (page === "chat") {
  return <AIChat setPage={setPage} />;
}
if (page === "request") {
  return (
    <RequestPage
      setPage={setPage}
      requests={requests}
      setRequests={setRequests}
    />
  );
}
if (page === "requests") {
  return (
    <MyRequests
      requests={requests}
      setPage={setPage}
    />
  );
}
if (page === "notifications") {
  return <StudentNotifications setPage={setPage} />;
}
if (page === "profile") {
  return <StudentProfile setPage={setPage} />;
}
if (page === "home") {
  // continue to the normal homepage below
}

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-inner">

          {/* Logo */}
          <div className="brand">
            <div className="logo">
              <span>🎓</span>
            </div>

            <div className="brand-text">
              <h1>Campus Care <span>AI</span></h1>
              <p>Smart Campus Support</p>
            </div>
          </div>

          {/* Navigation */}
         <nav className="nav">
  <a className="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>

          {/* Right side */}
          <div className="header-right">
           <button
  className="theme-button"
  aria-label="Change theme"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀" : "☾"}
</button>

            <div className="smart-campus">
              🏫
              <span>Smart Campus</span>
              <b>•</b>
              <span>Safe Future</span>
            </div>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <main id="home">

        <section className="hero">

          {/* College image */}
          <div className="hero-image">
            <img src={collegeImage} alt="College campus" />
          </div>

          {/* Blue overlay */}
          <div className="hero-overlay"></div>

          {/* Decorative curved shape */}
          <div className="hero-curve"></div>

          {/* Hero content */}
          <div className="hero-content">

            <div className="ai-badge">
              ✦ &nbsp; AI-Powered Campus Support
            </div>

            <h2>
              Your Campus.
              <br />
              <span>Our Care.</span>
            </h2>

            <p className="hero-description">
              A smarter way to report, manage and resolve college
              <br />
              complaints with the power of Artificial Intelligence.
            </p>

            {/* Login buttons */}
            <div className="login-buttons">

<button
  className="login-btn student"
  onClick={() => setPage("login")}
>
   <span className="button-icon">🎓</span>
  Student Login
  <span className="arrow">→</span>
</button>

  <button
  className="login-btn staff"
  onClick={() => setPage("staff-login")}
>
   <span className="button-icon">👥</span>
  Staff Login
  <span className="arrow">→</span>
</button>

  <button
  className="login-btn admin"
  onClick={() => setPage("admin-login")}
>
  <span className="button-icon">🛡️</span>
  Admin Login
  <span className="arrow">→</span>
</button>
</div>

            {/* Trust points */}
            <div className="trust-row">

              <div className="trust-item">
                <span>🔒</span>
                <p>Secure</p>
              </div>

              <div className="divider"></div>

              <div className="trust-item">
                <span>▣</span>
                <p>AI Assisted</p>
              </div>

              <div className="divider"></div>

              <div className="trust-item">
                <span>ϟ</span>
                <p>Fast Resolution</p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= FEATURES ================= */}
        <section className="features">

          <div className="feature">

            <div className="feature-icon blue">
              📝
            </div>

            <div>
              <h3>Easy Complaints</h3>
              <p>
                Submit campus complaints
                <br />
                quickly and easily.
              </p>
            </div>

          </div>

          <div className="feature-divider"></div>

          <div className="feature">

            <div className="feature-icon green">
              🤖
            </div>

            <div>
              <h3>AI Powered</h3>
              <p>
                Smart categorization and
                <br />
                complaint assistance.
              </p>
            </div>

          </div>

          <div className="feature-divider"></div>

          <div className="feature">

            <div className="feature-icon purple">
              📊
            </div>

            <div>
              <h3>Track Progress</h3>
              <p>
                Stay updated on the status
                <br />
                of your complaint.
              </p>
            </div>

          </div>

               </section>

        {/* ================= ABOUT ================= */}
        <section className="about-section" id="about">

          <div className="about-content">

            <div className="about-text">

              <span className="section-label">
                ABOUT CAMPUS CARE AI
              </span>

              <h2>
                Making Campus Support
                <br />
                <span>Smarter & Simpler</span>
              </h2>

              <p>
                Campus Care AI is a smart campus support platform
                designed to make it easier for students to report
                complaints and get the help they need.
              </p>

              <p>
                Students can submit requests, track their progress
                and receive AI-assisted support, while staff and
                administrators can manage campus requests efficiently.
              </p>

            </div>

            <div className="about-cards">

              <div className="about-card">
                <div>🎓</div>
                <h3>For Students</h3>
                <p>
                  Easily submit complaints and track their status.
                </p>
              </div>

              <div className="about-card">
                <div>👥</div>
                <h3>For Staff</h3>
                <p>
                  Manage student requests and provide support.
                </p>
              </div>

              <div className="about-card">
                <div>🛡️</div>
                <h3>For Admins</h3>
                <p>
                  Monitor campus support activity and reports.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact-section" id="contact">

          <div className="contact-content">

            <div className="contact-heading">

              <span className="section-label">
                CONTACT US
              </span>

              <h2>
                We're Here to
                <br />
                <span>Help You</span>
              </h2>

              <p>
                Have a question or need help with campus support?
                Get in touch with us.
              </p>

            </div>

            <div className="contact-cards">

              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <p>support@campuscare.ai</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Campus Office</h3>
                <p>Student Support Centre</p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;