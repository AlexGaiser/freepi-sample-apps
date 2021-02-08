const rollupSample = require("rollup-sample");
const { JSONPlaceholder } = require("@freepi/JSONPlaceholder");

const jsonWrapper = new JSONPlaceholder();

jsonWrapper.todos.find({ id: 1 }).then((data) => {
  console.log(data);
});
