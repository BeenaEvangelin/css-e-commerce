import React from "react";
import classes from "./Navigation.module.css";
const navItems = [
  "Jeweller & Accessories",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft Supplies & Tools",
];

const Navigation = () => {
  return (
    <div>
      <div className={classes.nav}>
        {navItems.map((navItem, index) => (
          <div key={index} className={classes.list}>
            {navItem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
