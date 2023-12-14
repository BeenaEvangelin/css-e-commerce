import React from "react";
import classes from "./Button.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

export const Button = ({ title, navItems }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const handleClick = () => {
    setActiveBtn(!activeBtn);
  };

  return (
    <>
      <div
        className={classes.footerBtn}
        onClick={handleClick}
        style={{
          backgroundColor: activeBtn ? "#eb8426" : "#f5f6f8",
          color: activeBtn ? "white" : "#3E3E3E",
        }}
      >
        {activeBtn ? title : title}
        <FaAngleDown />
      </div>
      {activeBtn && (
        <div className={classes.navContainer}>
          {navItems.map((item, idx) => (
            <div key={idx} className={classes.navItem}>
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
