import React from "react";
import classes from "./Signup.module.css";
import { useState, useEffect } from "react";
import { login } from "../../featues/User/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setFormError(newErrors);

    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormError(validateForm(formData));
    setIsFormValid(true);

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
      setFormError(validateForm(formData));
    }
  };
  const validateHandler = () => {
    setFormError(validateForm(formData));
    setIsFormValid(false);
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

            {formData.username !== "" && formError.username && (
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

            {formData.email !== "" && formError.email && (
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
            {formData.password !== "" && formError.password && (
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
            {formData.confirmPassword !== "" && formError.confirmPassword && (
              <p style={{ color: "red" }}>{formError.confirmPassword}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={classes.form__submitBtn}
          onClick={validateHandler}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
