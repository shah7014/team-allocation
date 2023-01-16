import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { employees as employeesList } from "./data/employees";
import EmployeesView from "./views/employees/EmployeesView";
import NotFound from "./views/NotFound";
import GroupedTeamView from "./views/teams/GroupedTeamView";

function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || employeesList
  );

  const [selectedTeam, setSelectedTeam] = useState(
    localStorage.getItem("selectedTeam") || "TeamA"
  );

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", selectedTeam);
  }, [selectedTeam]);

  const noOfEmployeesInSelectedTeam = employees.filter(
    (e) => e.teamName === selectedTeam
  ).length;

  const handleEmployeeTeamChange = (employee) => {
    const updatedEmployees = employees.map((e) => {
      if (e.id === employee.id) {
        e.teamName = e.teamName === selectedTeam ? "" : selectedTeam;
      }
      return e;
    });
    setEmployees(updatedEmployees);
  };

  const handleTeamChange = (team) => {
    setSelectedTeam(team);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Header
          selectedTeam={selectedTeam}
          noOfEmployees={noOfEmployeesInSelectedTeam}
        />

        <Routes>
          <Route
            path="/"
            element={
              <EmployeesView
                employees={employees}
                selectedTeam={selectedTeam}
                onEmployeeSelect={handleEmployeeTeamChange}
                onTeamChange={handleTeamChange}
              />
            }
          />
          <Route
            path="teams"
            element={
              <GroupedTeamView
                employees={employees}
                selectedTeam={selectedTeam}
                onTeamChange={handleTeamChange}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
