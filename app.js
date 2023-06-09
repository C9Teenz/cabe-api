require("dotenv").config();
const express = require("express");

const app = express();
// const port = process.env.PORT || 8000;
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
const cors = require("cors");

app.use(cors());
const routes = require("./routes");
app.use(routes);
app.listen(port, "0.0.0.0", () => {
  console.log(`App is litening form port ${port}`);
});
