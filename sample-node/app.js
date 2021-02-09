// const { JSONPlaceholder } = require("@freepi/JSONPlaceholder");
const { JSONPlaceholder } = require("freepi");
const jsonWrapper = new JSONPlaceholder();

jsonWrapper.todos.find({ id: 1 }).then((data) => {
  console.log(data);
});
