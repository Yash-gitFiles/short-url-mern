// const express = require("express");
// const connectionToDB = require("./db/connection");
// const urlRoute = require("./routes/url");
// const URL = require("./models/user");
// const app = express();

// app.use(express.json());

// app.get("/", (_, res) => {
//   res.send("Home Page");
// });

// app.use("/url", urlRoute);

// app.get("/:id", async (req, res) => {
//   const shortId = req.params.id;
//   const data = await URL.findOne({ shortId });
//   console.log("data", data);
//   res.redirect(302, data.originalURL);
// });

// app.listen(8001, () => {
//   connectionToDB();
//   console.log("Server is running on port 8001");
// });

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

// app.get("/:id", async (req, res) => {
//   const shortId = req.params.id;
//   const data = await URL.findOne({ shortId });
//   res.redirect(302, data.originalURL);
// });

app.get("/:id", async (req, res) => {
  try {
    const shortId = req.params.id;
    const data = await URL.findOne({ shortId });

    if (!data) {
      // Handle the case where the shortId is not found
      return res.status(404).send("URL not found");
    }

    // Redirect to the original URL
    res.redirect(302, data.originalURL);
  } catch (error) {
    // Handle potential errors from the database query
    console.error("Error finding URL:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(8001, () => {
  connectionToDB();
  console.log("Server is running on port 8001");
});
