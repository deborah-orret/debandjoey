import React from "react";
import "./StudentFeed.css"; // Import the CSS file

const StudentFeed = () => {
  // Sample data for the feed
  const feedItems = [
    { id: 1, color: "#4CAF50", period: "P1", question: "What is the powerhouse...", from: "Ms. Orret", status: "Done" },
    { id: 2, color: "#9C27B0", period: "P3", question: "Solve the following eq...", from: "Ms. Smith", status: "Open" },
    { id: 3, color: "#4CAF50", period: "P1", question: "How do you feel about...", from: "Ms. Orret", status: "Closed" },
    { id: 4, color: "#FFC107", period: "P2", question: "Write 2 sentences on t...", from: "Mr. Ganley", status: "Done" },
    { id: 5, color: "#9C27B0", period: "P3", question: "Solve the following eq...", from: "Ms. Smith", status: "Done" },
    { id: 6, color: "#4CAF50", period: "P1", question: "What is the difference...", from: "Ms. Orret", status: "Done" },
    { id: 7, color: "#4CAF50", period: "P1", question: "What day do you pref...", from: "Ms. Orret", status: "Done" },
    { id: 8, color: "#9C27B0", period: "P3", question: "Are you ready to move...", from: "Ms. Smith", status: "Done" },
  ];

  const statusColors = {
    Done: "status-done",
    Open: "status-open",
    Closed: "status-closed",
  };

  return (
    <div className="my-feed-container">
      {/* Header */}
      <div className="my-feed-header">
        <h1 className="my-feed-title">My Feed</h1>
      </div>

      {/* Table */}
      <div className="my-feed-content">
      <div className="class-list">
        {feedItems.map((feedItem, index) => (
          <div key={index} className="class-item">
            <div
              className="period-bubble"
              style={{ backgroundColor: feedItem.color }}
            >
              {feedItem.period}
            </div>
            <span className="class-name">{feedItem.question}</span>
            <span className="students-count">
              {feedItem.from}
            </span>
            <button className={`status-button ${statusColors[feedItem.status]}`}>{feedItem.status}</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default StudentFeed;
