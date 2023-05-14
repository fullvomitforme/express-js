const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const port = 8080;

app.use("/users", usersRoutes);

app.listen(port, () => {
  try {
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
