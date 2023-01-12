import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import React from "react";
import "./book.css";
import { useNavigate, useLocation } from "react-router-dom";

function View() {
  let navigate = useNavigate();
  const { state } = useLocation();
  function handleDelete() {
    axios
      .delete(`http://localhost:8000/api/book/delete/${state._id}`)
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
     
      <div id="table">
        <TableContainer component={Paper} className="table">
          <Table>
            <TableHead>
              <TableCell>
                <h2>SI.No</h2>
              </TableCell>
              <TableCell>
                <h2>Content</h2>
              </TableCell>
              <TableCell>
                <h2> Details</h2>
              </TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <h2>1</h2>
                </TableCell>
                <TableCell>
                  <h2>title</h2>
                </TableCell>
                <TableCell>
                  <h2> {state.title}</h2>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <h2>2</h2>
                </TableCell>
                <TableCell>
                  <h2>Author</h2>
                </TableCell>
                <TableCell>
                  <h2>{state.author}</h2>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <h2>3</h2>
                </TableCell>
                <TableCell>
                  <h2>ISBN</h2>
                </TableCell>
                <TableCell>
                  <h2>{state.ISBN}</h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <h2>4</h2>
                </TableCell>
                <TableCell>
                  <h2>Publisher</h2>
                </TableCell>
                <TableCell>
                  <h2>{state.publisher}</h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <h2>5</h2>
                </TableCell>
                <TableCell>
                  <h2>Published date</h2>
                </TableCell>
                <TableCell>
                  <h2>{state.publish_date}</h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <h2>6</h2>
                </TableCell>
                <TableCell>
                  <h2>Description</h2>
                </TableCell>
                <TableCell>
                  <h2>{state.description}</h2>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div id="deleteedit">
        <button id="deletebtn" className="btngrup" onClick={handleDelete}>
          Delete
        </button>
        <button id="editbtn" className="btngrup" onClick={handleEdit}>
          Edit
        </button>
        <button id="backbtn" className="btngrup" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default View;
