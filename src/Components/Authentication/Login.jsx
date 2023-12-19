import React from "react";
import { login } from "../../featues/User/UserSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({
    username: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const handleUsernameChange = (e) => {
    validateField(e.target.name, e.target.value);
    const enteredUsername = e.target.value;
    setUsername(enteredUsername);
  };

  const handlePasswordChange = (e) => {
    validateField(e.target.name, e.target.value);
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      dispatch(
        login({
          username: username,
          password: password,
          loggedIn: true,
        })
      );
      navigate("/");
    } else {
      validateForm();
    }
  };
  const navigateSignup = () => {
    navigate("/signup");
  };
  const validateForm = () => {
    const newErrors = {};

    if (username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
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

      case "password":
        newErrors.password =
          value.length >= 6
            ? ""
            : "Password must be at least 6 characters long";
        break;

      default:
        break;
    }

    setFormError(newErrors);
  };

  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.form_title}>Sign in</h1>
        <div className={classes.form_inputs}>
          <div className={classes.form_enteries}>
            <label className={classes.form_label}>User Name</label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              className={classes.form_input}
            />

            <p style={{ color: "red" }}>{formError.username}</p>
          </div>
          <div className={classes.form_enteries}>
            <label className={classes.form_label}>Your password</label>

            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              className={classes.form_input}
            />

            <p style={{ color: "red" }}>{formError.password}</p>
          </div>
        </div>

        <button type="submit" className={classes.form_submitBtn}>
          Log in
        </button>

        <span>Don't have an account?</span>

        <button
          type="submit"
          className={classes.form_accountBtn}
          onClick={navigateSignup}
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Login;
