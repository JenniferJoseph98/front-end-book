import React from "react";
import axios from "axios";
import "./edit.css";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
function Edit() {
  const { state } = useLocation();
  let navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    console.log(bookdetails);
    axios
      .put(`http://localhost:8000/api/book/update/${bookdetails.id}`, {
        bookdetails,
      })
      .then((res) => {
        navigate("/books");
      })
      .catch((e) => console.log(e));
  }

  const [bookdetails, setBookDetails] = useState({
    title: state.title,
    author: state.author,
    ISBN: state.ISBN,
    publish_date: state.publish_date,
    publisher: state.publisher,
    description: state.description,
    id: state._id,
  });
  return (
    <div>
      <form id="editform" onSubmit={(e) => submit(e)}>
        <label className="edititems">Title</label>
        <input
          type="text"
          className="edititems"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, title: e.target.value })
          }
          id="title"
          placeholder="title"
          value={bookdetails.title}
        />
        <label className="edititems">Author</label>
        <input
          className="edititems"
          type="text"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, author: e.target.value })
          }
          placeholder="author"
          id="author"
          value={bookdetails.author}
        />
        <label className="edititems">ISBN</label>
        <input
          className="edititems"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, ISBN: e.target.value })
          }
          type="text"
          placeholder="ISBN"
          id="ISBN"
          value={bookdetails.ISBN}
        />
        <label className="edititems">Publish date</label>
        <input
          onChange={(e) =>
            setBookDetails({ ...bookdetails, publish_date: e.target.value })
          }
          id="publish_date"
          type="text"
          className="edititems"
          placeholder="publish_date"
          value={bookdetails.publish_date}
        />
        <label className="edititems">Publisher</label>

        <input
          className="edititems"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, publisher: e.target.value })
          }
          type="text"
          id="publisher"
          placeholder="publisher"
          value={bookdetails.publisher}
        />
        <label className="edititems">Description</label>
        <input
          className="edititems"
          onChange={(e) =>
            setBookDetails({ ...bookdetails, description: e.target.value })
          }
          type="text"
          id="description"
          placeholder="description"
          value={bookdetails.description}
        />
        <button id="updatebtn" className="edititems">
          update
        </button>
      </form>
    </div>
  );
}

export default Edit;
