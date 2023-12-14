import React from "react";
import classes from "./Category.module.css";
import Products from "../Products/Products";
import Communities from "../Communities/Communities";
import Sellers from "../Sellers/Sellers";
import Uniques from "../Uniques/Uniques";
import OtherItems from "../OtherItems/OtherItems";
import Subscribe from "../Subscribe/Subscribe";
import Tab from "../Tab/Tab";
import Footer from "../Footer/Footer";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Logout from "../Authentication/Logout";
import { Counter } from "../../featues/counter/Counter";
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
    <div className={classes.categories}>
      <div className={classes.backdrop}>
        <div className={classes.category}>
          <div>
            <div className={classes.products}>
              {Images.map((image) => (
                <div
                  key={image.id}
                  className={classes.list}
                  style={{ backgroundImage: `url(${image.image})` }}
                >
                  <p className={classes.title}>{image.title}</p>
                </div>
              ))}
            </div>

            <Products />
            <Communities />
            <Sellers />
            <Uniques />
            <OtherItems />
            <Subscribe />
            <Tab />
            <Footer />
            <Login />
            <Signup />
            <Logout />
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
