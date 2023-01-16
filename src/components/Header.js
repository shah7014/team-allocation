import React from "react";

const Header = (props) => {
  return (
    <div className="container">
      <h1>Team Member Allocation</h1>
      <h3>
        {props.selectedTeam} has {props.noOfEmployees} Members
      </h3>
    </div>
  );
};

export default Header;
