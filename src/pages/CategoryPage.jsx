import React from "react";
import { Images } from "../Components/Category/Images";
import { useParams } from "react-router-dom";
import classes from "../pages/CategoryPage.module.css";

const CategoryPage = () => {
  const { id } = useParams();
  const currentCategory = Images[parseInt(id)];
  const { image, title } = currentCategory;

  return (
    <div className={classes.category}>
      <div>
        <div className={classes.products}>
          <div
            className={classes.list}
            style={{ backgroundImage: `url(${image})` }}
          >
            <p className={classes.title}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
