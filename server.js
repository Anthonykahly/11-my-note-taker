const express = require("express");
const app = express();

// Setting port to 3001
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require API and HTML routes
require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);
app.use(express.static("public"));

// Listener for port 3001
app.listen(PORT, function () {
  // Console Log port 3001
  console.log("App listening on PORT: " + PORT);
});
