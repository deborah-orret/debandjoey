import React from "react";
import "./Classes.css";

const Classes = () => {
  const classData = [
    { period: "P1", name: "AP Biology", students: 25, color: "#4CAF50" }, // Green
    { period: "P2", name: "Honors Biology 1", students: 31, color: "#FFC107" }, // Yellow
    { period: "P3", name: "Biology 1", students: 27, color: "#9C27B0" }, // Purple
  ];

  return (
    <div className="classes-container">
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
              {classItem.students} students
            </span>
            <button className="add-button">+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
