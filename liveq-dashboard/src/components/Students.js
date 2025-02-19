import React, { useState } from "react";
import "./Students.css";

const Students = () => {
  // Define initial class data
  const initialClassesData = {
    "AP Biology": [
      { name: "Andy Park", score: 98 },
      { name: "Ben Lambert", score: 87 },
      { name: "Deborah Orret", score: 91 },
      { name: "Jared Marmol", score: 90 },
    ],
    "Honors Math 1": [
      { name: "Emily Green", score: 95 },
      { name: "James Smith", score: 89 },
      { name: "Sophia Brown", score: 92 },
      { name: "Liam Johnson", score: 88 },
    ],
  };

  // State to store class data and selected class
  const [classesData, setClassesData] = useState(initialClassesData);
  const [selectedClass, setSelectedClass] = useState("AP Biology");

  // Remove student from the selected class
  const removeStudent = (index) => {
    const updatedClassData = { ...classesData };
    updatedClassData[selectedClass] = updatedClassData[selectedClass].filter(
      (_, i) => i !== index
    );
    setClassesData(updatedClassData);
  };

  return (
    <div className="students-container">
      <div className="students-header">
        <div className="dropdown">
          <h2 className="dropdown-title">
            {selectedClass} <span className="dropdown-arrow">▼</span>
          </h2>
          <div className="dropdown-menu">
            {Object.keys(classesData).map((className) => (
              <div
                key={className}
                className="dropdown-item"
                onClick={() => setSelectedClass(className)}
              >
                {className}
              </div>
            ))}
          </div>
        </div>
        <button className="add-student">Add Student</button>
      </div>
      <div className="students-list">
        {classesData[selectedClass].map((student, index) => (
          <div key={index} className="student-item">
            <span className="student-name">{student.name}</span>
            <span className="student-score">{student.score} Q</span>
            <button
              className="remove-button"
              onClick={() => removeStudent(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
