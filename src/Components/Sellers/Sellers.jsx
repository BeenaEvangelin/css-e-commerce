import React from "react";
import { useRef } from "react";
import classes from "./Sellers.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AllSellers } from "./allSellers";
import { Link } from "react-router-dom";

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
              {AllSellers.map((seller, id) => (
                <Link key={id} to={`/sellers/${id}`}>
                  <div>
                    <div className={classes.card}>
                      <img src={seller.image} className={classes.image} />
                    </div>
                  </div>
                  <div className={classes.title}>{seller.title}</div>
                </Link>
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
