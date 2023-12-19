import React from "react";
import classes from "./Signup.module.css";
import { useState, useEffect } from "react";
import { login } from "../../featues/User/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfimPassword] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = (fieldName) => {
    const newErrors = formError;

    if (fieldName) {
      console.log(
        "🚀 ~ file: Signup.jsx:28 ~ validateForm ~ fieldName:",
        fieldName
      );
      if (formData[fieldName].trim() === "") {
        newErrors[fieldName] = `${fieldName} is required`;
      } else {
        newErrors[fieldName] = "";
      }
      setFormError(newErrors);

      return;
    }

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      // formData.email &&

      !emailRegex.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (
      // formData.password &&
      formData.password.length < 6
    ) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (
      // formData.confirmPassword &&
      formData.confirmPassword !== formData.password
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setFormError(newErrors);

    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validateForm(e.target.name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validateForm();

    if (isFormValid) {
      dispatch(
        login({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          loggedIn: true,
        })
      );
      navigate("/");
    } else {
      validateForm();
    }
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
              value={formData.username}
              onChange={handleChange}
              className={classes.form__input}
            />

            {formError.username && (
              <p style={{ color: "red" }}>{formError.username}</p>
            )}
          </div>

          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Email</label>
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={classes.form__input}
            />

            {formError.email && (
              <p style={{ color: "red" }}>{formError.email}</p>
            )}
          </div>
          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Your password</label>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={classes.form__input}
            />
            {formError.password && (
              <p style={{ color: "red" }}>{formError.password}</p>
            )}
          </div>
          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Confirm password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={classes.form__input}
            />
            {formError.confirmPassword && (
              <p style={{ color: "red" }}>{formError.confirmPassword}</p>
            )}
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
