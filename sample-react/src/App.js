import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

import rollupSample from "rollup-sample";
import JSONPlaceholder from "@freepi/jsonplaceholder";
import { RequestBuilder } from "@freepi/core";

const jsonWrapper = new JSONPlaceholder();
function App() {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    const req = new RequestBuilder("https://jsonplaceholder.typicode.com");
    req
      .extendURL("/todos")
      .extendURL("/1")
      .setReqMethod("get")
      .buildRequest()
      .sendRequest()
      .then((data) => console.log(data));

    jsonWrapper.todos
      .getById(1)
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("error");
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          console.log(error.response);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
    jsonWrapper.users
      .findAll()
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    const post = { something: "something" };
    jsonWrapper.photos
      .create(post)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    jsonWrapper.photos
      .findNested("albums", 1, "photos")()
      .then((data) => {
        const images = data.data.map((item) => {
          console.log(item.url);
          return <img src={item.url} />;
        });
        console.log(images);
        setPhotos(images);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {photos}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {rollupSample.eat("nachos")}
        </a>
      </header>
    </div>
  );
}

export default App;
