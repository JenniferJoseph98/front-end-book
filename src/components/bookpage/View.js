import axios from "axios";
import React from "react";
import "./book.css";
import { useNavigate, useLocation } from "react-router-dom";
import Logout from "./Logout";
function View() {
  let navigate = useNavigate();
  const { state } = useLocation();
  function handleDelete() {
    axios
      .delete(
        `https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/book/delete/${state._id}`
      )
      //`https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/book/delete/${state._id}`
      .then((res) => {
        console.log(state._id);
        alert("Books deleted succcessfully");
      })
      .catch((e) => console.log(e));

    navigate("/books");
  }
  function handleEdit() {
    console.log("Hi");
    navigate("/edit", {
      state,
    });
  }
  return (
    <div id="viewpage">
      <Logout />

      <table id="table">
        <tr>
          <td>1</td>
          <td>title</td>
          <td>{state.title}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>author</td>
          <td>{state.author}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ISBN</td>
          <td>{state.ISBN}</td>
        </tr>
        <tr>
          <td>4 </td>
          <td>Publisher</td>
          <td>{state.publisher}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Published date</td>
          <td>{state.publish_date}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>description</td>
          <td>{state.description}</td>
        </tr>
      </table>
      <div id="deleteedit">
        <button id="deletebtn" onClick={handleDelete}>
          delete
        </button>
        <button id="editbtn" onClick={handleEdit}>
          edit
        </button>
      </div>
    </div>
  );
}

export default View;
