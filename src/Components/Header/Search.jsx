import React from "react";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.search}>
      <button className={classes.categoryBtn}>
        <span>All categories </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={classes.arrowsvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6L8.70711 9.29289C8.31658 9.68342 7.68342 9.68342 7.29289 9.29289L4 6"
            fill="#5F5F5F"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input className={classes.text} placeholder="Search anything" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="11"
          r="6"
          fill="#FFF9F3"
          stroke="#5F5F5F"
          strokeWidth="2"
        />
        <path
          d="M20 20L17 17"
          stroke="#5F5F5F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Search;
