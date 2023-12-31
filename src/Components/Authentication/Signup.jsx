import React from "react";
import classes from "./Signup.module.css";
import { useState } from "react";
import { login } from "../../featues/User/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfimPassword] = useState("");

  const [formError, setFormError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleUsernameChange = (e) => {
    validateField(e.target.name, e.target.value);
    const enteredUsername = e.target.value;
    setUsername(enteredUsername);
  };
  const handleEmailChange = (e) => {
    validateField(e.target.name, e.target.value);

    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (e) => {
    validateField(e.target.name, e.target.value);
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    validateField(e.target.name, e.target.value);
    const enteredConfirmPassword = e.target.value;
    setConfimPassword(enteredConfirmPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isFormValid) {
      dispatch(
        login({
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          loggedIn: true,
        })
      );
      navigate("/");
    } else {
      validateForm();
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (username.trim() === "") {
      newErrors.username = "Username is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setFormError(newErrors);

    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...formError };

    switch (fieldName) {
      case "username":
        newErrors.username = value.trim() ? "" : "Username is required";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
        break;
      case "password":
        newErrors.password =
          value.length >= 6
            ? ""
            : "Password must be at least 6 characters long";
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          value === password ? "" : "Passwords do not match";
        break;
      default:
        break;
    }

    setFormError(newErrors);
  };

  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1 className={classes.form__title}>Sign up</h1>
        <div className={classes.form__inputs}>
          <div className={classes.form__enteries}>
            <label className={classes.form__label}>User Name</label>
            <input
              placeholder="Name"
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              className={classes.form__input}
            />

            <p style={{ color: "red" }}>{formError.username}</p>
          </div>

          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Email</label>
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className={classes.form__input}
            />

            <p style={{ color: "red" }}>{formError.email}</p>
          </div>
          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Your password</label>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={classes.form__input}
            />

            <p style={{ color: "red" }}>{formError.password}</p>
          </div>
          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Confirm password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={classes.form__input}
            />

            <p style={{ color: "red" }}>{formError.confirmPassword}</p>
          </div>
        </div>

        <button type="submit" className={classes.form__submitBtn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
