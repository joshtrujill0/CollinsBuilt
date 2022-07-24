const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
console.log(port);

app.listen(port, () => {
  console.log(`www.collinsbuiltpools.com running on port ${port}...`);
});
