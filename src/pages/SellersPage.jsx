import React from "react";
import classes from "../pages/SellersPage.module.css";
import { useParams } from "react-router-dom";
import { AllSellers } from "../Components/Sellers/allSellers";

const SellersPage = () => {
  const { id } = useParams();
  const currentSeller = AllSellers[parseInt(id)];
  const { image, title } = currentSeller;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.card}>
          <img src={image} className={classes.image} />
        </div>
      </div>
      <div className={classes.title}>{title}</div>
    </div>
  );
};

export default SellersPage;
