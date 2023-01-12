import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./book.css";
import Logout from "./Logout";
function AddBook() {
  let navigate = useNavigate();
  let id = localStorage.getItem("user");
  function handleSubmit() {
    console.log(bookdetails);
    axios
      .post("https://full-stack-book.vercel.app/api/book/addbook", {
        bookdetails,
      })
      .then((res) => {
        console.log(bookdetails);
        navigate(-1);
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
    user: id,
  });
  return (
    <div id="bookcontainer">
      <div className="header">
        <button className="addbookbtn" onClick={() => navigate("/books")}>
          Book List
        </button>
        <Logout />
        <button className="addbookbtn" onClick={() => handleSubmit()}>
          Add book
        </button>
      </div>

      <form id="addbookcontainer">
        <input
          className="add"
          type="text"
          required
          onChange={(e) =>
            setBookDetails({ ...bookdetails, title: e.target.value })
          }
          id="title"
          placeholder="title"
          value={bookdetails.title}
        />
        <input
          required
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
          required
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
          required
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
          required
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
          required
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
