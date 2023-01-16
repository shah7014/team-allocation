import React from "react";
import "./EmployeesView.css";
import TeamSelector from "./TeamSelector";
import Employee from "./Employee";

const EmployeesView = ({
  employees,
  selectedTeam,
  onEmployeeSelect,
  onTeamChange,
}) => {
  return (
    <div className="container">
      <TeamSelector onTeamChange={onTeamChange} selectedTeam={selectedTeam} />
      <div className="employees">
        {employees.map((e) => (
          <Employee
            employee={e}
            key={e.id}
            selectedTeam={selectedTeam}
            onEmployeeSelect={onEmployeeSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeesView;
