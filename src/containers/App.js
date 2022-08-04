import React, { Component, useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status: ${response.status}`);
        }
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <div>
        <h1 className="f1">Robo Explorer</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>

      <div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    </div>
  );
}

export default App;
