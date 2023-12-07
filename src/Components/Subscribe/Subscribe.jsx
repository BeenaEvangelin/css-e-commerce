import React from "react";
import classes from "./Subscribe.module.css";
import { FaArrowRight } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.section}>
          <div className={classes.textbox}>
            <div className={classes.intro}>
              Yes!
              <div className={classes.subtitle}>
                Send me exclusive offers, unique gift ideas, and personalized
                tips for shopping and selling on Commerce.
              </div>
            </div>
          </div>
          <div className={classes.mailtab}>
            <input
              type="text"
              placeholder="Drop your Email"
              className={classes.input}
            />
            <button className={classes.btn}>
              Subscribe <FaArrowRight className={classes.arrow} />
            </button>
          </div>
          <div className={classes.order}>First order only. You're ready?</div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
