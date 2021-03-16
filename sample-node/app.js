// const { JSONPlaceholder } = require("@freepi/JSONPlaceholder");
const dotenv = require("dotenv");
dotenv.config();
const { JSONPlaceholder } = require("freepi");
const jsonWrapper = new JSONPlaceholder();
const { Unsplash } = require("@freepi/unsplash");
jsonWrapper.todos.find({ id: 1 }).then((data) => {
  console.log(data);
});
let unsplash = new Unsplash({ access_key: process.env.UNSPLASH_CLIENT_ID });
const { RequestBuilder } = require("@freepi/core");
unsplash.photos.getAll().then((data) => console.log("unsplash data", data));
const req = new RequestBuilder({
  url: "https://jsonplaceholder.typicode.com",
});
req.extendURL("/todos/1");

req
  .build()
  .send()
  .then((data) => console.log(data.data));
