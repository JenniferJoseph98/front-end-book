import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./book.css";
import Logout from "./Logout";
function AddBook() {
  let navigate = useNavigate();
  function handleSubmit() {
    console.log(bookdetails);
    axios
      .post(
        "https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/book/addbook",
        {
          // https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/book/addbook
          bookdetails,
        }
      )
      .then((res) => {
        navigate("/books");
      })
      .catch((e) => console.log(e));
  }
  const [bookdetails, setBookDetails] = useState({
    title: "",
    author: "",
    ISBN: "",
    publish_date: "",
    publisher: "",
    description: "",
    user: localStorage.getItem("user"),
  });
  return (
    <div id="bookcontainer">
      <div class="header">
        <Logout />
        <button className="add" onClick={(e) => handleSubmit(e)}>
          Add book
        </button>
      </div>
      <form id="addbookcontainer">
        <input
          className="add"
          type="text"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, title: e.target.value })
          }
          id="title"
          placeholder="title"
          value={bookdetails.title}
        />
        <input
          className="add"
          type="text"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, author: e.target.value })
          }
          placeholder="author"
          id="author"
          value={bookdetails.author}
        />
        <input
          className="add"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, ISBN: e.target.value })
          }
          type="text"
          placeholder="ISBN"
          id="ISBN"
          value={bookdetails.ISBN}
        />
        <input
          className="add"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, publish_date: e.target.value })
          }
          id="publish_date"
          type="text"
          placeholder="publish_date"
          value={bookdetails.publish_date}
        />
        <input
          className="add"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, publisher: e.target.value })
          }
          type="text"
          id="publisher"
          placeholder="publisher"
          value={bookdetails.publisher}
        />
        <input
          className="add"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, description: e.target.value })
          }
          type="text"
          id="description"
          placeholder="description"
          value={bookdetails.description}
        />
      </form>
    </div>
  );
}

export default AddBook;
