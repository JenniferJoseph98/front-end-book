import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();
  function logoff() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <button id="logoutbutton" onClick={() => logoff()}>logout</button>
    </div>
  );
}

export default Logout;
