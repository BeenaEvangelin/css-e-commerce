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
import { Images } from "./Images";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={classes.categories}>
      <div className={classes.backdrop}>
        <div className={classes.category}>
          <div>
            <div className={classes.products}>
              {Images.map((image, idx) => (
                <Link
                  key={image.id}
                  to={`/categories/${idx}`}
                  className={classes.list}
                  style={{ backgroundImage: `url(${image.image})` }}
                >
                  <p className={classes.title}>{image.title}</p>
                </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
