const express = require("express");
const connectionToDB = require("./db/connection");
const urlRoute = require("./routes/url");
const URL = require("./models/user");
const app = express();
const path = require("path");
const staticRouter = require("./routes/staticRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // form-data support karne ke liye.
app.use("/url", urlRoute);
app.use("/static", staticRouter);

// app.get("/", (_, res) => {
//   return res.send("Home Page");
// });

app.get("/:id", async (req, res) => {
  try {
    const shortId = req.params.id;
    console.log("shortId", shortId);
    const data = await URL.findOne({ shortId });

    console.log(":", data);

    if (!data || data === null) {
      return res.status(404).send("URL not found");
    } else {
      return res.redirect(302, data.originalURL);
    }
  } catch (error) {
    console.error("Error finding URL:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// app.get("/ejs", async (_, res) => {
//   const allUrl = await URL.find({});
//   return res.render("home", {
//     urls: allUrl,
//   });
// });

app.listen(8001, () => {
  connectionToDB();
  console.log("Server is running on port 8001");
});
