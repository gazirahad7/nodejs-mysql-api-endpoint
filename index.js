const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const postsRouter = require("./routes/posts.router");
const authRouter = require("./routes/auth.router");
app.use(cors());
app.use(morgan("dev"));
app.get("/test", (req, res) => {
  res.send("API is working...");
});
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running....");
});
