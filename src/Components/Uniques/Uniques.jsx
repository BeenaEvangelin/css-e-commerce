import React from "react";
import classes from "./Uniques.module.css";
import Uniques1 from "../../assets/images/Unique1.png";
import Uniques2 from "../../assets/images/Unique2.png";
import Uniques3 from "../../assets/images/Unique3.png";
import Uniques4 from "../../assets/images/Unique4.png";
import Uniques5 from "../../assets/images/Unique5.png";
import Uniques6 from "../../assets/images/Uniques6.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AllUniques = [
  {
    image: Uniques1,
    title: "Distressed Tote Leather Bag",
    subTitle: "Leather Bag",
    amount: "216,27",
    OtherCategory: "Modern Farmhouse",
  },
  {
    image: Uniques2,
    title: "Womens Cognac Leather",
    subTitle: "Elastic Straps",
    amount: "195,13",
    OtherCategory: "Eclectic Decor",
  },
  {
    image: Uniques3,
    title: "Distressed Tote Leather Bag",
    subTitle: "Leather Bag",
    amount: "910,76",
    OtherCategory: "Polka Boho Decor",
  },
  {
    image: Uniques4,
    title: "Hip Top Canvas Shoes",
    subTitle: "Shoes",
    amount: "341,02",
    OtherCategory: "Minimalist Style",
  },
  {
    image: Uniques5,
    title: "Rose Gold Moissanite Vintage",
    subTitle: "Wedding Ring Set",
    amount: "3.344,13",
    OtherCategory: "Anniversary Gift",
  },
  {
    image: Uniques6,
    title: "Blue Topaz Bangle 4K Gold",
    subTitle: "Plated Handmade",
    amount: "789,09",
    OtherCategory: "Wedding Gifts",
  },
];

const Uniques = () => {
  return (
    <div className={classes.section}>
      <div className={classes.uniques}>
        <div className={classes.things}>Discover unique hand-picked items</div>
      </div>
      <div className={classes.frame}>
        <div className={classes.circle}>
          <IoIosArrowBack />
        </div>
        <div className={classes.container}>
          {AllUniques.map((unique, idx) => (
            <div key={idx}>
              <>
                <div className={classes.card}>
                  <div>
                    <div className={classes.round}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={classes.like}
                      >
                        <path
                          d="M2.96714 9.27214L7.60221 13.6263C7.65405 13.675 7.67998 13.6993 7.70466 13.7174C7.88052 13.8462 8.11952 13.8462 8.29538 13.7174C8.32006 13.6993 8.34599 13.675 8.39783 13.6263L13.0329 9.27214C14.337 8.04706 14.4954 6.03106 13.3986 4.61738L13.1923 4.35156C11.8802 2.66038 9.24644 2.94401 8.32446 4.87576C8.19423 5.14864 7.80581 5.14864 7.67558 4.87576C6.7536 2.94401 4.11984 2.66038 2.80772 4.35156L2.60148 4.61738C1.50465 6.03106 1.66302 8.04706 2.96714 9.27214Z"
                          stroke="#5F5F5F"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <img src={unique.image} className={classes.image} />
                  </div>

                  <div className={classes.text}>
                    <div className={classes.title}>
                      {unique.title}
                      <div>{unique.subTitle}</div>
                    </div>
                    <div className={classes.amount}>{unique.amount} $</div>
                  </div>
                </div>
                <div className={classes.otherCategory}>
                  {unique.OtherCategory}
                </div>
              </>

              <div className={classes.decorate}>
                <div className={classes.line}></div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.circle}>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Uniques;
