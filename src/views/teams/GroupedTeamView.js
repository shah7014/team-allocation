import React, { useState } from "react";
import "./GroupedTeamView.css";

const GroupedTeamView = ({ employees, selectedTeam, onTeamChange }) => {
  const getGroupedEmployeesByTeam = () => {
    return employees.reduce((groupByTeam, employee) => {
      const employeeTeam = employee.teamName;
      const groupedEmployeesEntry = groupByTeam.find(
        (g) => g.teamName === employeeTeam
      );
      if (groupedEmployeesEntry) {
        groupedEmployeesEntry.employees.push(employee);
      } else {
        groupByTeam.push({
          teamName: employeeTeam,
          employees: [employee],
          isOpen: selectedTeam === employeeTeam,
        });
      }
      return groupByTeam;
    }, []);
  };

  const [groupedEmployees, setGroupedEmployees] = useState(
    getGroupedEmployeesByTeam()
  );

  const toggleTeamBox = (teamName) => {
    const newGroupedEmployees = groupedEmployees.map((ge) => {
      if (ge.teamName === teamName) {
        ge.isOpen = !ge.isOpen;
      } else {
        ge.isOpen = false;
      }
      return ge;
    });
    // console.log(newGroupedEmployees);
    // setGroupedEmployees((groupedEmployees) => {
    //   return groupedEmployees.map((ge) => {
    //     if (ge.teamName === teamName) {
    //       ge.isOpen = !ge.isOpen;
    //     } else {
    //       ge.isOpen = false;
    //     }
    //     return ge;
    //   });
    // });
    setGroupedEmployees(newGroupedEmployees);
    onTeamChange(teamName);
  };

  return (
    <div>
      {groupedEmployees.map((ge) => (
        <div key={ge.teamName}>
          <h4 onClick={() => toggleTeamBox(ge.teamName)} className="team">
            Team Name: {ge.teamName}
          </h4>
          {ge.isOpen &&
            ge.employees.map((e) => (
              <div key={e.id}>
                <h5>Full Name: {e.fullName}</h5>
                <p>Designation: {e.designation}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default GroupedTeamView;
