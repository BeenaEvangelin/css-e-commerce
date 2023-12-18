import React from "react";
import classes from "./Uniques.module.css";
import { AllUniques } from "./allUniques";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

const Uniques = () => {
  const inputSlide = useRef();
  const previousSlide = () => {
    inputSlide.current.scrollLeft -= 600;
  };
  const nextSlide = () => {
    inputSlide.current.scrollLeft += 600;
  };
  return (
    <>
      <div className={classes.uniques}>
        <div className={classes.things}>Discover unique hand-picked items</div>
      </div>
      <div className={classes.section}>
        <div className={classes.frame}>
          <div className={classes.circle}>
            <IoIosArrowBack onClick={previousSlide} />
          </div>

          <div className={classes.container} ref={inputSlide}>
            {AllUniques.map((unique, id) => (
              <Link key={id} to={`/uniques/${id}`}>
                <div>
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
                </div>

                <div className={classes.decorate}>
                  <div className={classes.line}></div>
                </div>
              </Link>
            ))}
          </div>

          <div className={classes.circle}>
            <IoIosArrowForward onClick={nextSlide} />
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

export default Uniques;
