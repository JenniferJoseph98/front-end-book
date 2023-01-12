import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();

  const [userdetails, setUserdetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit(e) {
    const { username, password } = userdetails;
    console.log(userdetails);
    e.preventDefault();
    if (userdetails.password !== userdetails.confirmPassword) {
      alert("Password and confirm password must be same");
    } else {
      axios
        .post("http://localhost:8000/api/user/register", {
          //https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/user/register
          username: username,
          password: password,
        })
        .then((res) => {
          navigate("/");
        })
        .catch((e) => alert(e.response.data));
    }
  }
  return (
    <div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <h1>Register</h1>
        <input
          placeholder="     username"
          className="loginitems"
          type="text"
          required
          value={userdetails.username}
          onChange={(e) =>
            setUserdetails({ ...userdetails, username: e.target.value })
          }
        />
        <input
          className="loginitems"
          placeholder="     password"
          type="password"
          required
          value={userdetails.password}
          onChange={(e) =>
            setUserdetails({ ...userdetails, password: e.target.value })
          }
        />
        <input
          className="loginitems"
          placeholder="      confirm password"
          required
          type="password"
          value={userdetails.confirmPassword}
          onChange={(e) =>
            setUserdetails({ ...userdetails, confirmPassword: e.target.value })
          }
        />
        <button className="loginitems" type="submit">
          submit
        </button>
        <span className="red loginitems">Member Login</span>
      </form>
      <div className="registerlink">
        <span className="registerspan">
          <Link to="/">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
