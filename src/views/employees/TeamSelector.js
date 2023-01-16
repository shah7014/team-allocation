import React from "react";

const TeamSelector = (props) => {
  const teams = [
    { lable: "Team A", value: "TeamA" },
    { lable: "Team B", value: "TeamB" },
    { lable: "Team C", value: "TeamC" },
    { lable: "Team D", value: "TeamD" },
  ];

  const handleTeamChange = (e) => {
    props.onTeamChange(e.target.value);
  };

  return (
    <select
      onChange={handleTeamChange}
      value={props.selectedTeam}
      className="team-select"
    >
      {teams.map((t) => (
        <option value={t.value} key={t.value}>
          {t.lable}
        </option>
      ))}
    </select>
  );
};

export default TeamSelector;
