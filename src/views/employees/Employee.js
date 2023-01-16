import React from "react";
import maleImg from "../../images/maleProfile.jpg";
import femaleImg from "../../images/femaleProfile.jpg";

const Employee = (props) => {
  let imageSrc = maleImg;
  const employee = props.employee;
  const selectedTeam = props.selectedTeam;
  let employeeStyleClass = "employee";

  if (employee.gender === "female") {
    imageSrc = femaleImg;
  }

  if (employee.teamName === selectedTeam) {
    employeeStyleClass = employeeStyleClass + " selected";
  }

  const handleEmployeeSelected = () => {
    props.onEmployeeSelect(employee);
  };

  return (
    <div className={employeeStyleClass} onClick={handleEmployeeSelected}>
      <img src={imageSrc} alt="profilepicture" className="profile-img" />
      <h5>Full Name: {employee.fullName}</h5>
      <p className="job">
        <b>Designation:</b> {employee.designation}
      </p>
    </div>
  );
};

export default Employee;
