import React from 'react';
import "./style.css"
import {
  Avatar
} from '@mui/material';
const Cardcontainer = ({ employeesData }) => {

  return (  

      
    <div className="card-container">
      {employeesData && employeesData.map((employee) => (
        <div className="card" key={employee.id}>
          <div className="avatar">
          <Avatar

        src={employee.featuredImageURL}
    sx={{height:"100%", width:"100%"}}
      />
          </div>
          <div className="details">
            <h3 className="name">{employee.fullName}</h3>
            <p className="position">{employee.designationName}</p>
            <p className="department">{employee.department}</p>
            <div className="contact">
              <i className="bi bi-telephone"></i>
              <span>{employee.phoneNumber}</span>
            </div>
            <div className="contact">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${employee.email}`}>{employee.email}</a>
            </div>
            <div className="contact">
              <i className="fas fa-envelope"></i>
              <span>Line Manager - {employee.lineManagerName}</span>
            </div>
          </div>
        </div>   
      ))}
    </div>
  );
};

export default Cardcontainer;
