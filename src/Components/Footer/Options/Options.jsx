import React from "react";
import classes from "./Options.module.css";

const AllOptions = [
  {
    title: "Shop",
    subTitle: ["Gift cards", "Site map", "Polka blog", "Login", "Sign in"],
  },
  {
    title: "Sell",
    subTitle: ["Sell on Polka", "Teams", "Forums", "Affiliates"],
  },
  {
    title: "About",
    subTitle: ["Polka, Inc.", "Policies", "Investors", "Careers", "Press"],
  },
  {
    title: "Help",
    subTitle: ["Help Center", "Trust and safety", "Privacy settings"],
  },
];

const Options = () => {
  return (
    <div className={classes.option}>
      <div className={classes.others}>
        {AllOptions.map((option, idx) => (
          <div className={classes.options} key={idx}>
            <div className={classes.title}>{option.title}</div>
            <div className={classes.subTitle}>
              {option.subTitle.map((subTitle, idx) => (
                <div key={idx}>{subTitle}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
