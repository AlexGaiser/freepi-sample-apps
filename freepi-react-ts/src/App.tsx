import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { JSONPlaceholder } from "freepi";
import { RequestBuilder } from "@freepi/core";
import JSONPlaceholder from "@freepi/jsonplaceholder";
const jsonWrap = new JSONPlaceholder();

function App() {
  useEffect(() => {
    jsonWrap.posts.getById(1).then((data) => data);
    jsonWrap.todos
      .find({ userId: 1 })
      .then((data) => console.log(data.data[0]));
    jsonWrap.comments.findAll().then((data) => console.log(data));

    const req = new RequestBuilder("https://jsonplaceholder.typicode.com");
    req
      .extendURL("/todos")
      .extendURL("/1")
      .setReqMethod("get")
      .buildRequest()
      .sendRequest()
      .then((data) => console.log(data));
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
