// const { JSONPlaceholder } = require("@freepi/JSONPlaceholder");
const { JSONPlaceholder } = require("freepi");
const jsonWrapper = new JSONPlaceholder();

jsonWrapper.todos.find({ id: 1 }).then((data) => {
  console.log(data);
});

const { RequestBuilder } = require("@freepi/core");

const req = new RequestBuilder({
  url: "https://jsonplaceholder.typicode.com",
});
req.extendURL("/todos/1");

req
  .build()
  .send()
  .then((data) => console.log(data.data));
