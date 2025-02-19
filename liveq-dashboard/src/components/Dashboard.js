import React from "react";
import Header from "./Header";
import Classes from "./Classes";
import Students from "./Students";
import QButtons from "./QButtons";
import LastQuestion from "./LastQuestion";

const Dashboard = ({ handleNavigation }) => {
    return (
      <div>
        <Header handleNavigation={handleNavigation} />
        
        {/* Dashboard Content */}
        <div style={{ }}>
          
          {/* Components */}
          <Classes />
          <Students />
          <QButtons />
          <LastQuestion />
        </div>
      </div>
    );
  };
  
  // Inline styles for simplicity
  const styles = {
   
  };
  
  export default Dashboard;