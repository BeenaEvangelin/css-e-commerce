import React from "react";
import classes from "./Privacy.module.css";

const Terms = ["Privacy policy", "Terms of use", "Cookies"];

const Privacy = () => {
  return (
    <div className={classes.container}>
      <div className={classes.copyrights}>© 2022 Commerce, Inc.</div>
      <div className={classes.terms}>
        {Terms.map((term, idx) => (
          <div key={idx} className={classes.text}>
            {term}
          </div>
        ))}
      </div>
      <div className={classes.scroll}>
        Scroll to top
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6.66675L8 2.66675M8 2.66675L12 6.66675M8 2.66675L8 12.6667"
            stroke="#5F5F5F"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Privacy;
