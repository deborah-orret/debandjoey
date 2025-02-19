import React from "react";
import "./StudentClasses.css";

const StudentClasses = () => {
  const classData = [
    { period: "P1", name: "AP Biology", teacher: "Ms. Orret", color: "#4CAF50" }, // Green
    { period: "P2", name: "Honors Biology 1", teacher: "Mr. Ganley", color: "#FFC107" }, // Yellow
    { period: "P3", name: "Biology 1", teacher: "Mr. Smith", color: "#9C27B0" }, // Purple
  ];

  return (
    <div className="student-classes-container">
      <div className="classes-header">
        <h2>My Classes</h2>
        <button className="edit-classes">Edit Classes</button>
      </div>
      <div className="class-list">
        {classData.map((classItem, index) => (
          <div key={index} className="class-item">
            <div
              className="period-bubble"
              style={{ backgroundColor: classItem.color }}
            >
              {classItem.period}
            </div>
            <span className="class-name">{classItem.name}</span>
            <span className="students-count">
              {classItem.teacher}
            </span>
            <button className="add-button">+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentClasses;
