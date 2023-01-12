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
      .get(`http://localhost:8000/api/book/getallbooks/${id}`)
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
        <div>
          <button className="headeritems" onClick={() => addBook()}>
            AddBook
          </button>
        </div>
        <Logout className="headeritems" />
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
                src="https://th.bing.com/th/id/R.6e324d8e12db6a4b282e9a4262def3b0?rik=sY9zvqi7HNkTog&riu=http%3a%2f%2f3.bp.blogspot.com%2f-vpM2K_Dtt5k%2fUYk0uk9jMGI%2fAAAAAAAAB7E%2fZHWz8VkFeSo%2fs1600%2fHorrorCover017.jpg&ehk=Do8cAGHrw7DKA0yrPFPofFSf8OB6%2fz%2fhxNksv94j3gY%3d&risl=&pid=ImgRaw&r=0"
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
