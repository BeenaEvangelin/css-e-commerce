import React from "react";
import classes from "./Communities.module.css";
import community from "../../assets/images/Community.svg";
import community1 from "../../assets/images/Community1.svg";
import community2 from "../../assets/images/Community2.svg";
const AllCommunities = [
  {
    id: 1,
    title: "A community doing good",
    discription: "Commerce is a global online marketplace, where people.",
    image: community,
  },
  {
    id: 2,
    title: "Support independent creators",
    discription: "Just millions of people selling the things they love.",
    image: community1,
  },
  {
    id: 3,
    title: "Peace of mind",
    discription: "Privacy is the highest priority of our dedicated team.",
    image: community2,
  },
];

const Communities = () => {
  return (
    <div className={classes.comm}>
      <div className={classes.container}>
        {AllCommunities.map((community, idx) => (
          <div key={idx} className={classes.card}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
