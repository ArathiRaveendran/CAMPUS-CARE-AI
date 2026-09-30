import { useState } from "react";
import "./RequestPage.css";

function RequestPage({ setPage, setRequests }) {
  const [requestType, setRequestType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("");
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRequest = {
      id: Date.now(),
      type: requestType,
      subject: subject,
      description: description,
      location: location,
      priority: priority,
      photo: photo,
      status: "Pending",
      date: new Date().toLocaleDateString("en-GB"),
    };

    setRequests((previousRequests) => [
      ...previousRequests,
      newRequest,
    ]);

    setSubmitted(true);
  };

  return (
    <div className="request-page">

      <div className="request-card">

        <button
          type="button"
          className="back-dashboard-button"
          onClick={() => setPage("dashboard")}
        >
          ← Back to Dashboard
        </button>

        <h1>Submit a Request</h1>

        <p className="request-subtitle">
          Tell us how we can help you.
        </p>

        {submitted ? (
          <div className="success-message">

            <div className="success-icon">✓</div>

            <h2>Request Submitted!</h2>

            <p>
              Your request has been submitted successfully.
              You can track it from My Requests.
            </p>

            <button
              type="button"
              onClick={() => setPage("requests")}
            >
              View My Requests →
            </button>

            <button
              type="button"
              className="another-request"
              onClick={() => {
                setSubmitted(false);
                setRequestType("");
                setSubject("");
                setDescription("");
                setLocation("");
                setPriority("");
                setPhoto(null);
              }}
            >
              Submit Another Request
            </button>

          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            {/* Category */}
            <label>Complaint Category</label>

            <select
              value={requestType}
              onChange={(event) => setRequestType(event.target.value)}
              required
            >
              <option value="">Select complaint category</option>
              <option>Academic</option>
              <option>Hostel</option>
              <option>Electrical</option>
              <option>Water Supply</option>
              <option>IT/Internet</option>
              <option>Library</option>
              <option>Canteen</option>
              <option>Cleanliness</option>
              <option>Transportation</option>
              <option>Security</option>
              <option>Other</option>
            </select>

            {/* Subject */}
            <label>Subject</label>

            <input
              type="text"
              placeholder="Enter the subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            />

            {/* Description */}
            <label>Description</label>

            <textarea
              placeholder="Describe your issue or request..."
              rows="5"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            ></textarea>

            {/* Location */}
            <label>Location</label>

            <input
              type="text"
              placeholder="Enter the location of the issue"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            />

            {/* Photo */}
            <label>Attach Photo (Optional)</label>

            <input
              type="file"
              accept="image/*"
              onChange={(event) => setPhoto(event.target.files[0])}
            />

            {photo && (
              <div className="photo-preview">
                <p>Selected Photo:</p>
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Complaint preview"
                />
              </div>
            )}

            {/* Priority */}
            <label>Priority</label>

            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              required
            >
              <option value="">Select priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>

            <button type="submit">
              Submit Request →
            </button>

          </form>
        )}

      </div>

    </div>
  );
}

export default RequestPage;