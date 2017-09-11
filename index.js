const express = require("express");
require('./services/passport');
const app = express();

require('./routes/authRoutes')(app);//return function that takes the app object as argument

const PORT = process.env.PORT || 5000; //prod env port or dev 5000
app.listen(PORT);
