const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
// const
const postgresRoute = require("./routes/postgress");
const mongoRoute = require("./routes/mongo");
const mysqlRoute = require("./routes/mysql");
const node2Route = require("./routes/node2");
const cors = require("cors");
require("./databases/mongodb");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/pg", postgresRoute);
app.use("/mongo", mongoRoute);
app.use("/mysql", mysqlRoute);
app.use("/node2", node2Route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
