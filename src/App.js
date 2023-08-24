import "./App.css";
import Navbar from "./components/Navbar";
import NewsComponents from "./components/NewsComponents";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsComponents
                key="home"
                pageSize={12}
                country={"in"}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={
              <NewsComponents
                key="general"
                pageSize={12}
                country={"in"}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <NewsComponents
                key="Business"
                pageSize={12}
                country={"in"}
                category={"business"}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <NewsComponents
                key="entertainment"
                pageSize={12}
                country={"in"}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <NewsComponents
                key="health"
                pageSize={12}
                country={"in"}
                category={"health"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <NewsComponents
                key="science"
                pageSize={12}
                country={"in"}
                category={"science"}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <NewsComponents
                key="sports"
                pageSize={12}
                country={"in"}
                category={"sports"}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <NewsComponents
                key="technology"
                pageSize={12}
                country={"in"}
                category={"technology"}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About key="about" />}></Route>
          <Route
            path="/search/:query"
            element={
              <NewsComponents
                key={searchQuery}
                pageSize={12}
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
