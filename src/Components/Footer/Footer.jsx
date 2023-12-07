import React from "react";
import Options from "./Options/Options";
import classes from "./Footer.module.css";
import Privacy from "./Privacy/Privacy";
const Footer = () => {
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.footer}>
          <div className={classes.about}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="48"
              viewBox="0 0 200 48"
              fill="none"
            >
              <path
                d="M4.18 19.3V22.8H8.88001V25.02H4.18V28.72H9.48001V31H1.38V17.02H9.48001V19.3H4.18Z"
                fill="#EB6D20"
              />
              <path
                d="M20.5445 22.68V25.04H12.0645V22.68H20.5445Z"
                fill="#EB6D20"
              />
              <path
                d="M22.9647 25.46C22.9647 24.3134 23.198 23.3134 23.6647 22.46C24.1314 21.5934 24.778 20.9267 25.6047 20.46C26.4314 19.98 27.378 19.74 28.4447 19.74C29.818 19.74 30.9514 20.0867 31.8447 20.78C32.7514 21.46 33.358 22.42 33.6647 23.66H30.6447C30.4847 23.18 30.2114 22.8067 29.8247 22.54C29.4514 22.26 28.9847 22.12 28.4247 22.12C27.6247 22.12 26.9914 22.4134 26.5247 23C26.058 23.5734 25.8247 24.3934 25.8247 25.46C25.8247 26.5134 26.058 27.3334 26.5247 27.92C26.9914 28.4934 27.6247 28.78 28.4247 28.78C29.558 28.78 30.298 28.2734 30.6447 27.26H33.6647C33.358 28.46 32.7514 29.4134 31.8447 30.12C30.938 30.8267 29.8047 31.18 28.4447 31.18C27.378 31.18 26.4314 30.9467 25.6047 30.48C24.778 30 24.1314 29.3334 23.6647 28.48C23.198 27.6134 22.9647 26.6067 22.9647 25.46Z"
                fill="#EB6D20"
              />
              <path
                d="M40.6359 31.18C39.5693 31.18 38.6093 30.9467 37.7559 30.48C36.9026 30 36.2293 29.3267 35.7359 28.46C35.2559 27.5934 35.0159 26.5934 35.0159 25.46C35.0159 24.3267 35.2626 23.3267 35.7559 22.46C36.2626 21.5934 36.9493 20.9267 37.8159 20.46C38.6826 19.98 39.6493 19.74 40.7159 19.74C41.7826 19.74 42.7493 19.98 43.6159 20.46C44.4826 20.9267 45.1626 21.5934 45.6559 22.46C46.1626 23.3267 46.4159 24.3267 46.4159 25.46C46.4159 26.5934 46.1559 27.5934 45.6359 28.46C45.1293 29.3267 44.4359 30 43.5559 30.48C42.6893 30.9467 41.7159 31.18 40.6359 31.18ZM40.6359 28.74C41.1426 28.74 41.6159 28.62 42.0559 28.38C42.5093 28.1267 42.8693 27.7534 43.1359 27.26C43.4026 26.7667 43.5359 26.1667 43.5359 25.46C43.5359 24.4067 43.2559 23.6 42.6959 23.04C42.1493 22.4667 41.4759 22.18 40.6759 22.18C39.8759 22.18 39.2026 22.4667 38.6559 23.04C38.1226 23.6 37.8559 24.4067 37.8559 25.46C37.8559 26.5134 38.1159 27.3267 38.6359 27.9C39.1693 28.46 39.8359 28.74 40.6359 28.74Z"
                fill="#EB6D20"
              />
              <path
                d="M62.2299 19.76C63.5899 19.76 64.6832 20.18 65.5098 21.02C66.3498 21.8467 66.7699 23.0067 66.7699 24.5V31H63.9698V24.88C63.9698 24.0134 63.7498 23.3534 63.3098 22.9C62.8699 22.4334 62.2699 22.2 61.5098 22.2C60.7499 22.2 60.1432 22.4334 59.6898 22.9C59.2498 23.3534 59.0299 24.0134 59.0299 24.88V31H56.2299V24.88C56.2299 24.0134 56.0098 23.3534 55.5698 22.9C55.1298 22.4334 54.5298 22.2 53.7698 22.2C52.9965 22.2 52.3832 22.4334 51.9298 22.9C51.4898 23.3534 51.2698 24.0134 51.2698 24.88V31H48.4698V19.92H51.2698V21.26C51.6298 20.7934 52.0898 20.4267 52.6498 20.16C53.2232 19.8934 53.8498 19.76 54.5299 19.76C55.3965 19.76 56.1698 19.9467 56.8498 20.32C57.5299 20.68 58.0565 21.2 58.4298 21.88C58.7898 21.24 59.3098 20.7267 59.9898 20.34C60.6832 19.9534 61.4299 19.76 62.2299 19.76Z"
                fill="#EB6D20"
              />
              <path
                d="M83.1869 19.76C84.5469 19.76 85.6402 20.18 86.4669 21.02C87.3069 21.8467 87.7269 23.0067 87.7269 24.5V31H84.9269V24.88C84.9269 24.0134 84.7069 23.3534 84.2669 22.9C83.8269 22.4334 83.2269 22.2 82.4669 22.2C81.7069 22.2 81.1002 22.4334 80.6469 22.9C80.2069 23.3534 79.9869 24.0134 79.9869 24.88V31H77.1869V24.88C77.1869 24.0134 76.9669 23.3534 76.5269 22.9C76.0869 22.4334 75.4869 22.2 74.7269 22.2C73.9536 22.2 73.3402 22.4334 72.8869 22.9C72.4469 23.3534 72.2269 24.0134 72.2269 24.88V31H69.4269V19.92H72.2269V21.26C72.5869 20.7934 73.0469 20.4267 73.6069 20.16C74.1802 19.8934 74.8069 19.76 75.4869 19.76C76.3535 19.76 77.1269 19.9467 77.8069 20.32C78.4869 20.68 79.0135 21.2 79.3869 21.88C79.7469 21.24 80.2669 20.7267 80.9469 20.34C81.6402 19.9534 82.3869 19.76 83.1869 19.76Z"
                fill="#EB6D20"
              />
              <path
                d="M100.684 25.22C100.684 25.62 100.657 25.98 100.604 26.3H92.5039C92.5706 27.1 92.8506 27.7267 93.3439 28.18C93.8372 28.6334 94.4439 28.86 95.1639 28.86C96.2039 28.86 96.9439 28.4134 97.3839 27.52H100.404C100.084 28.5867 99.4706 29.4667 98.5639 30.16C97.6572 30.84 96.5439 31.18 95.2239 31.18C94.1572 31.18 93.1972 30.9467 92.3439 30.48C91.5039 30 90.8439 29.3267 90.3639 28.46C89.8972 27.5934 89.6639 26.5934 89.6639 25.46C89.6639 24.3134 89.8972 23.3067 90.3639 22.44C90.8306 21.5734 91.4839 20.9067 92.3239 20.44C93.1639 19.9734 94.1306 19.74 95.2239 19.74C96.2773 19.74 97.2172 19.9667 98.0439 20.42C98.8839 20.8734 99.5306 21.52 99.9839 22.36C100.451 23.1867 100.684 24.14 100.684 25.22ZM97.7839 24.42C97.7706 23.7 97.5106 23.1267 97.0039 22.7C96.4972 22.26 95.8772 22.04 95.1439 22.04C94.4506 22.04 93.8639 22.2534 93.3839 22.68C92.9172 23.0934 92.6306 23.6734 92.5239 24.42H97.7839Z"
                fill="#EB6D20"
              />
              <path
                d="M105.528 21.64C105.888 21.0534 106.354 20.5934 106.928 20.26C107.514 19.9267 108.181 19.76 108.928 19.76V22.7H108.188C107.308 22.7 106.641 22.9067 106.188 23.32C105.748 23.7334 105.528 24.4534 105.528 25.48V31H102.728V19.92H105.528V21.64Z"
                fill="#EB6D20"
              />
              <path
                d="M110.094 25.46C110.094 24.3134 110.327 23.3134 110.794 22.46C111.26 21.5934 111.907 20.9267 112.734 20.46C113.56 19.98 114.507 19.74 115.574 19.74C116.947 19.74 118.08 20.0867 118.974 20.78C119.88 21.46 120.487 22.42 120.794 23.66H117.774C117.614 23.18 117.34 22.8067 116.954 22.54C116.58 22.26 116.114 22.12 115.554 22.12C114.754 22.12 114.12 22.4134 113.654 23C113.187 23.5734 112.954 24.3934 112.954 25.46C112.954 26.5134 113.187 27.3334 113.654 27.92C114.12 28.4934 114.754 28.78 115.554 28.78C116.687 28.78 117.427 28.2734 117.774 27.26H120.794C120.487 28.46 119.88 29.4134 118.974 30.12C118.067 30.8267 116.934 31.18 115.574 31.18C114.507 31.18 113.56 30.9467 112.734 30.48C111.907 30 111.26 29.3334 110.794 28.48C110.327 27.6134 110.094 26.6067 110.094 25.46Z"
                fill="#EB6D20"
              />
              <path
                d="M133.145 25.22C133.145 25.62 133.118 25.98 133.065 26.3H124.965C125.032 27.1 125.312 27.7267 125.805 28.18C126.298 28.6334 126.905 28.86 127.625 28.86C128.665 28.86 129.405 28.4134 129.845 27.52H132.865C132.545 28.5867 131.932 29.4667 131.025 30.16C130.118 30.84 129.005 31.18 127.685 31.18C126.618 31.18 125.658 30.9467 124.805 30.48C123.965 30 123.305 29.3267 122.825 28.46C122.358 27.5934 122.125 26.5934 122.125 25.46C122.125 24.3134 122.358 23.3067 122.825 22.44C123.292 21.5734 123.945 20.9067 124.785 20.44C125.625 19.9734 126.592 19.74 127.685 19.74C128.738 19.74 129.678 19.9667 130.505 20.42C131.345 20.8734 131.992 21.52 132.445 22.36C132.912 23.1867 133.145 24.14 133.145 25.22ZM130.245 24.42C130.232 23.7 129.972 23.1267 129.465 22.7C128.958 22.26 128.338 22.04 127.605 22.04C126.912 22.04 126.325 22.2534 125.845 22.68C125.378 23.0934 125.092 23.6734 124.985 24.42H130.245Z"
                fill="#EB6D20"
              />
            </svg>
            <div className={classes.address}>
              Cricklewood,London NW2 6qg, Uk
            </div>
            <div className={classes.touch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#1877F2"
                />
                <path
                  d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#1DA1F2"
                />
                <path
                  d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#2867B2"
                />
                <path
                  d="M11.6 24H8.2V13.3H11.6V24ZM9.9 11.8C8.8 11.8 8 11 8 9.9C8 8.8 8.9 8 9.9 8C11 8 11.8 8.8 11.8 9.9C11.8 11 11 11.8 9.9 11.8ZM24 24H20.6V18.2C20.6 16.5 19.9 16 18.9 16C17.9 16 16.9 16.8 16.9 18.3V24H13.5V13.3H16.7V14.8C17 14.1 18.2 13 19.9 13C21.8 13 23.8 14.1 23.8 17.4V24H24Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                  fill="#EA4C89"
                />
                <path
                  d="M16 8C11.584 8 8 11.584 8 16C8 20.416 11.584 24 16 24C20.4 24 24 20.416 24 16C24 11.584 20.4 8 16 8ZM21.28 11.68C22.24 12.848 22.8 14.32 22.832 15.936C22.608 15.888 20.352 15.44 18.08 15.712C18.032 15.6 17.984 15.472 17.936 15.36C17.792 15.024 17.648 14.688 17.488 14.368C19.984 13.36 21.136 11.872 21.28 11.68ZM16 9.184C17.728 9.184 19.328 9.84 20.528 10.896C20.4 11.072 19.376 12.448 16.944 13.36C15.824 11.296 14.576 9.616 14.4 9.36C14.912 9.248 15.44 9.184 16 9.184ZM13.088 9.824C13.264 10.064 14.48 11.76 15.616 13.776C12.416 14.624 9.6 14.608 9.296 14.608C9.76 12.48 11.184 10.72 13.088 9.824ZM9.168 16.016C9.168 15.952 9.168 15.872 9.168 15.808C9.456 15.824 12.784 15.856 16.192 14.832C16.384 15.216 16.576 15.6 16.752 16C16.672 16.032 16.576 16.048 16.48 16.08C12.96 17.216 11.088 20.32 10.928 20.576C9.824 19.36 9.168 17.76 9.168 16.016ZM16 22.832C14.416 22.832 12.96 22.288 11.808 21.392C11.936 21.136 13.312 18.464 17.168 17.12C17.184 17.104 17.2 17.104 17.216 17.104C18.176 19.6 18.576 21.68 18.672 22.288C17.856 22.64 16.944 22.832 16 22.832ZM19.808 21.664C19.744 21.248 19.376 19.248 18.48 16.8C20.624 16.464 22.496 17.024 22.736 17.088C22.432 18.992 21.344 20.64 19.808 21.664Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <Options />
        </div>
        <div>
          <Privacy />
        </div>
      </div>
    </div>
  );
};

export default Footer;
