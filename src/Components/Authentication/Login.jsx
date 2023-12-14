import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

const Login = () => {
  //   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const usernameHandler = (e) => {
  //     return setUsername(e.target.value);
  //   };
  const emailHandler = (e) => {
    return setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    return setPassword(e.target.value);
  };
  return (
    <div className={classes.login}>
      <form className={classes.form}>
        <h1 className={classes.form__title}>Sign in</h1>
        <div className={classes.form__inputs}>
          {/* <div className={classes.form__enteries}>
            <label className={classes.form_label}>Email</label>
            <input
              placeholder="Beena Angel"
              type="text"
              value={username}
              onChange={usernameHandler}
            />
          </div> */}

          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Email</label>
            <input
              placeholder="beenaangel@gmail.com"
              type="text"
              value={email}
              onChange={emailHandler}
              className={classes.form__input}
            />
          </div>
          <div className={classes.form__enteries}>
            <label className={classes.form__label}>Your password</label>

            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={passwordHandler}
              className={classes.form__input}
            />
          </div>
        </div>

        <button type="submit" className={classes.form__submitBtn}>
          Log in
        </button>
        <span>Don't have an account?</span>
        <button type="submit" className={classes.form__accountBtn}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Login;
