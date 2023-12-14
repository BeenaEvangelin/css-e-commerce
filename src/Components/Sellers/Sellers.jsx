import React from "react";
import { useRef } from "react";
import classes from "./Sellers.module.css";
import Sellers1 from "../../assets/images/Sellers1.png";
import Sellers2 from "../../assets/images/Sellers2.png";
import Sellers3 from "../../assets/images/Sellers3.png";
import Sellers4 from "../../assets/images/Sellers4.png";
import Sellers5 from "../../assets/images/Sellers5.png";
import Sellers6 from "../../assets/images/Sellers6.png";
import Sellers7 from "../../assets/images/Sellers7.png";
import Sellers8 from "../../assets/images/Sellers8.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AllSellers = [
  { image: Sellers1, title: "Craft Kits" },
  { image: Sellers2, title: "Throw Pillows" },
  { image: Sellers3, title: "Natural Glass" },
  { image: Sellers4, title: "Self-care" },
  { image: Sellers5, title: "Gift Ideas" },
  { image: Sellers6, title: "Wall Decor" },
  { image: Sellers7, title: "Wedding" },
  { image: Sellers8, title: "Life Style" },
  { image: Sellers1, title: "Craft Kits" },
  { image: Sellers2, title: "Throw Pillows" },
  { image: Sellers3, title: "Natural Glass" },
  { image: Sellers4, title: "Self-care" },
  { image: Sellers5, title: "Gift Ideas" },
  { image: Sellers6, title: "Wall Decor" },
  { image: Sellers7, title: "Wedding" },
  { image: Sellers8, title: "Life Style" },
  { image: Sellers1, title: "Craft Kits" },
  { image: Sellers2, title: "Throw Pillows" },
  { image: Sellers3, title: "Natural Glass" },
  { image: Sellers4, title: "Self-care" },
  { image: Sellers5, title: "Gift Ideas" },
  { image: Sellers6, title: "Wall Decor" },
  { image: Sellers7, title: "Wedding" },
  { image: Sellers8, title: "Life Style" },
  { image: Sellers1, title: "Craft Kits" },
  { image: Sellers2, title: "Throw Pillows" },
  { image: Sellers3, title: "Natural Glass" },
  { image: Sellers4, title: "Self-care" },
  { image: Sellers5, title: "Gift Ideas" },
  { image: Sellers6, title: "Wall Decor" },
  { image: Sellers7, title: "Wedding" },
  { image: Sellers8, title: "Life Style" },
];

const Sellers = () => {
  const sliderInput = useRef();
  const nextSlide = () => {
    sliderInput.current.scrollLeft += 600;
  };
  const previousSlide = () => {
    sliderInput.current.scrollLeft -= 600;
  };
  return (
    <>
      <div>
        <div className={classes.sellers}>
          <div className={classes.things}>
            Find things you'll love. Support independent sellers
          </div>
          <div className={classes.span}>only on polka</div>
        </div>
        <div className={classes.section}>
          <div className={classes.frame}>
            <div className={classes.circle} onClick={previousSlide}>
              <IoIosArrowBack />
            </div>
            <div className={classes.container} ref={sliderInput}>
              {AllSellers.map((seller, idx) => (
                <div key={idx}>
                  <>
                    <div className={classes.card}>
                      <img src={seller.image} className={classes.image} />
                    </div>
                  </>
                  <div className={classes.title}>{seller.title}</div>
                </div>
              ))}
            </div>
            <div className={classes.circle}>
              <IoIosArrowForward onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.scrollBtns}>
        <div className={classes.greybtns}></div>
        <div className={classes.goldbtn}></div>
        <div className={classes.greybtns}></div>
      </div>
    </>
  );
};

export default Sellers;
