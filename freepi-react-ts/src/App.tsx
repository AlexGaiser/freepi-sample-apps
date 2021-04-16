import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { RequestBuilder, requests } from "@freepi/core";
// import { Unsplash } from "@freepi/unsplash";

import { JSONPlaceholder, DinoIpsum, Unsplash } from "freepi";

const di = new DinoIpsum();

const jsonWrap = new JSONPlaceholder();

const access_key: string = process.env.REACT_APP_UNSPLASH_CLIENT_ID
  ? process.env.REACT_APP_UNSPLASH_CLIENT_ID
  : "";
const un = new Unsplash({
  access_key,
});
const { likePhoto } = un.photos;
function App() {
  const [photo, setPhoto] = useState<any>();
  const [randomPhotos, setRandomPhotos] = useState<any>();
  useEffect(() => {
    jsonWrap.posts.getById(1).then((data) => data);
    jsonWrap.todos
      .find({ userId: 1 })
      .then((data) => console.log(data.data[0]));
    jsonWrap.comments.findAll().then((data) => console.log(data));
    di.getDinoIpsum("json", 10, 200).then((data) => console.log(data));
    const req = new RequestBuilder({
      url: "https://jsonplaceholder.typicode.com",
    });
    req
      .extendURL("/todos")
      .extendURL("/2")
      .setMethod("get")
      .build()
      .send()
      .then((data) => console.log(data.data));
    un.photos.search({ query: "cat" }).then((res) => {
      console.log(res.data);
      setPhoto(res.data.results[0]);
    });
    un.photos
      .getRandom({
        query: "dog",
        color: "blue",
        count: 50,
      })
      .then((data) => {
        console.log(data.data);
        setRandomPhotos(data.data);
      });
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {photo ? (
          <img
            src={photo.urls.regular}
            onClick={() =>
              likePhoto(photo.id).then((data) => console.log(data))
            }
          />
        ) : null}
        {randomPhotos
          ? randomPhotos.map((item: any) => {
              return <img src={item.urls.regular} />;
            })
          : null}
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
