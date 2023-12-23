import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandle = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  useEffect(() => {}, []);
  return (
    <button className="inline-block px-6 py-6 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandle}>
      Logout
    </button>
  );
};

export default LogoutButton;
