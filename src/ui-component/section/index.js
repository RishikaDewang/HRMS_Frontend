import React from 'react';
import './style.css';

// Sample JSON data with an array of work schedules

const Calculation = ({attsummary}) => {

  return (
    <div className="attendancecard">
      <div className="insidecard">
        <div className="cards">
          <h6 className="cardstitle">Work Schedules</h6>
          <p className="schedule">{attsummary.workSchedule}</p>

        </div>
        <div className="cards">
          <h6 className="cardstitle">Logged Time</h6>
          <p className="schedule">{attsummary.loggedTime}</p>

        </div>
        <div className="cards">
          <h6 className="cardstitle">Paid Time</h6>
          <p className="schedule">{attsummary.paidTime}</p>

        </div>
        <div className="cards">
          <h6 className="cardstitle">Deficit</h6>
          <p className="schedule">{attsummary.deficit}</p>

        </div>

        <div className="cards">
          <h6 className="cardstitle">Overtime</h6>
          <p className="schedule">{attsummary.overtime}</p>

        </div>
      </div>
    </div>
  );
};

export default Calculation;
