const express = require("express");
const path = require("path");
const { connectMongoDb } = require("./connect");
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middleware/auth");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8001;
// const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/",checkAuth, staticRoute);

// app.get("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   return res.render("home", {
//     urls: allUrls,
//   });
// });

connectMongoDb("mongodb://localhost:27017/short_url").then(() => {
  console.log("MongoDb connected");
});

// mongoose.connect(process.env.DB_URL).then(() => {
//   console.log("MongoDb connected");
// });

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
