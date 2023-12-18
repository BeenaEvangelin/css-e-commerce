import React from "react";

import { logout } from "../../featues/User/UserSlice";
import { selectUser } from "../../featues/User/UserSlice";
import { useSelector, useDispatch } from "react-redux";
const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Welcome <div className="user_name">{user?.username}</div>
      </h1>

      <button className="logout_button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
