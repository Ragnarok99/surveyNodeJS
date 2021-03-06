const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./models/Survey");

require("./services/passport");
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); //return function that takes the app object as argument
require("./routes/billingRoutes")(app);
require("./routes//surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //express serve production assets
  app.use(express.static("client/build"));

  //express serve the index.html file if it doesnot recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000; //prod env port or dev 5000
app.listen(PORT);
