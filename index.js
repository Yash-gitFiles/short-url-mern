const express = require("express");
const connectionToDB = require("./db/connection");
const urlRoute = require("./routes/url");
const URL = require("./models/user");
const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Home Page");
});

app.use("/url", urlRoute);

app.get("/:id", async (req, res) => {
  const shortId = req.params.id;
  const data = await URL.findOne({ shortId });
  res.redirect(302, data.originalURL);
});

app.listen(8001, () => {
  connectionToDB();
  console.log("Server is running on port 8001");
});
