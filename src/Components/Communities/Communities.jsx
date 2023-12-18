import React from "react";
import classes from "./Communities.module.css";
import { AllCommunities } from "./allCommunities";
import { Link } from "react-router-dom";

const Communities = () => {
  return (
    <div className={classes.comm}>
      <div className={classes.container}>
        {AllCommunities.map((community, idx) => (
          <Link key={idx} to={`/communities/${idx}`} className={classes.card}>
            <div className={classes.text}>
              <div className={classes.title}>{community.title}</div>
              <div className={classes.description}>{community.discription}</div>
            </div>
            <img src={community.image} />
            <div className={classes.mobtext}>
              <div className={classes.mobtitle}>{community.title}</div>
              <div className={classes.mobdescription}>
                {community.discription}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Communities;
