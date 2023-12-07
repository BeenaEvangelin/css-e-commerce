import React from "react";
import classes from "./Category.module.css";
import Products from "../Products/Products";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

const Images = [
  { id: 1, image: image1, title: "Clothing & Shoes" },
  { id: 2, image: image2, title: "Home & Living" },
  { id: 3, image: image3, title: "Art & Collectibles" },
];

const Category = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.category}>
        <div className={classes.products}>
          {Images.map((image) => (
            <div key={image.id} className={classes.list}>
              <img src={image.image} className={classes.image} />
              <p className={classes.title}>{image.title}</p>
            </div>
          ))}
        </div>

        {/* <Products /> */}
      </div>
    </div>
  );
};

export default Category;
