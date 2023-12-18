import React from "react";
import classes from "../pages/CommunitiesPage.module.css";
import { useParams } from "react-router-dom";
import { AllCommunities } from "../Components/Communities/allCommunities";
const CommunitiesPage = () => {
  const { id } = useParams();
  const currentCommunity = AllCommunities[parseInt(id)];
  const { image, title, discription } = currentCommunity;
  return (
    <div className={classes.section}>
      <div className={classes.comm}>
        <div className={classes.container}>
          <div className={classes.text}>
            <div className={classes.title}>{title}</div>
            <div className={classes.description}>{discription}</div>
          </div>
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default CommunitiesPage;
