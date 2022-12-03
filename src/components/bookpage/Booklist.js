import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./book.css";
import Logout from "./Logout";

function Booklist() {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  useEffect(() => {
    let id = localStorage.getItem("user");
    axios
      .get(
        `https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/book/getallbooks/${id}`
      )
      //`https://638b355bf783e81285847180--chic-cannoli-2b5552.netlify.app/api/book/getallbooks/${id}`
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  function handleSUbmit(id, books) {
    navigate("/view", {
      state: books,
    });
  }
  function addBook() {
    console.log("addbook");
    navigate("/addbook");
  }
  return (
    <div id="booklistpage">
      <h1>Booklist</h1>
      <div className="header">
        <Logout className="headeritems" />

        <button className="headeritems" onClick={() => addBook()}>
          AddBook
        </button>
      </div>
      <div id="container">
        {book.map((books, index) => {
          return (
            <div
              onClick={() => handleSUbmit(books._id, books)}
              key={index}
              className="book"
            >
              <img
                className="image"
                alt="bookimg"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg"
              />
              <hr />
              <ul>
                <li id="booktitle">{books.title}</li>
                <li>{books.author}</li>
                <li>{books.description}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Booklist;
