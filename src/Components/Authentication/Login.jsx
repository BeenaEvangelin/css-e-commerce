import React from "react";
import { login } from "../../featues/User/UserSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }

      if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters long";
      }

      setFormError(newErrors);

      const isValid = Object.keys(newErrors).length === 0;
      setIsFormValid(isValid);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      dispatch(
        login({
          email: formData.email,
          password: formData.password,
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
  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.form_title}>Sign in</h1>
        <div className={classes.form_inputs}>
          <div className={classes.form_enteries}>
            <label className={classes.form_label}>Email</label>
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={classes.form_input}
            />
            {formData.email !== "" && formError.email && (
              <p style={{ color: "red" }}>{formError.email}</p>
            )}
          </div>
          <div className={classes.form_enteries}>
            <label className={classes.form_label}>Your password</label>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={classes.form_input}
            />
            {formData.password !== "" && formError.password && (
              <p style={{ color: "red" }}>{formError.password}</p>
            )}
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
