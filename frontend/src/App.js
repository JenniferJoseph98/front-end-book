import { Route, Routes } from "react-router-dom";
import "./App.css";

import AddBook from "./components/bookpage/AddBook";
import Edit from "./components/bookpage/Edit";
import Register from "./components/login/Register";
import Booklist from "./components/bookpage/Booklist";
import View from "./components/bookpage/View";
import Login from "./components/login/Login";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/view"
          element={
            <Protected>
              <View />
            </Protected>
          }
        />
        <Route
          path="/addbook"
          element={
            <Protected>
              <AddBook />
            </Protected>
          }
        />
        <Route
          path="/edit"
          element={
            <Protected>
              <Edit />
            </Protected>
          }
        />
        <Route
          path="/books"
          element={
            <Protected>
              <Booklist />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
