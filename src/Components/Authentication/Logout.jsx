import React from "react";
import classes from "./Logout.module.css";

const Logout = () => {
  return (
    <div className="logout">
      <h1>
        Welcome <span className="user_name">Beena</span>
      </h1>
      <button className="logout_button">Logout</button>
    </div>
  );
};

export default Logout;
