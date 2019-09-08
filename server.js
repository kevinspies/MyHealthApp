const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/health", {useNewUrlParser: true})
//         .then(()=> console.log("CONNECTED to db! 😁"))
//         .catch(e=>console.log(e));
mongoose.connect(process.env.MONGODB_URI || "mongodb://kev3:0c&#C29B3491@ds219308.mlab.com:19308/heroku_87d05ffv", {useNewUrlParser: true})
        .then(()=> console.log("CONNECTED to db! 😁"))
        .catch(e=>console.log(e));



// Define API routes here
app.use(apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
