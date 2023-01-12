import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [userdetails, setUserdetails] = useState({
    username: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userdetails);
    axios
      .post(
        `https://vercel.com/jenniferjoseph98/full-stack-book/api/user/login`,
        {
          //`https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/user/login`
          username: userdetails.username,
          password: userdetails.password,
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/books");
      })
      .catch((e) => {
        alert(e);
      });
  }
  return (
    <div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <h1 id="memberloginlogo">Member Login</h1>
        <input
          className="loginitems"
          type="text"
          placeholder="     username"
          value={userdetails.username}
          onChange={(e) =>
            setUserdetails({ ...userdetails, username: e.target.value })
          }
        />
        <input
          className="loginitems"
          placeholder="     password"
          type="password"
          value={userdetails.password}
          onChange={(e) =>
            setUserdetails({ ...userdetails, password: e.target.value })
          }
        />

        <button className="loginitems" type="submit">
          submit
        </button>
        <span className="red loginitems">Forget Password ?</span>
      </form>
      <div className="registerlink">
        <span className="registerspan">
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
