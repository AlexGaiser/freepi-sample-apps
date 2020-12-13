const freepi = require("freepi")
const rollupSample = require("rollup-sample")

const { JSONPlaceholder } = freepi

const jsonWrapper = new JSONPlaceholder()

jsonWrapper.getTodoById(1).then((data)=>{
  console.log(data)
})
