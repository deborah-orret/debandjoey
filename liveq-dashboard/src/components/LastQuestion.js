import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./LastQuestion.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LastQuestion = () => {
  const chartData = {
    labels: ["Nucleus", "RNA", "Mitochondria", "Cell Body"],
    datasets: [
      {
        label: "Responses",
        data: [4, 2, 19, 2],
        backgroundColor: "#4494ed",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="last-question-container">
      <div className="last-question-header">
        <h2>My Last Q</h2>
        <div className="tags">
          <span className="tag purple">Biology 1</span>
          <span className="tag yellow">Multiple Choice</span>
        </div>
      </div>
      <div className="question-text">
        <p>What is the powerhouse of the cell?</p>
        <p className="subtext">One Correct Answer</p>
      </div>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LastQuestion;
