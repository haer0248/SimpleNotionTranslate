const express = require("express");
const moduleToFetch = require("./index");
const getDatabase = moduleToFetch.getDatabase;
const port = process.env.PORT;

const app = express();

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/submit-form", async (req, res) => {
  const title = req.body.title;
  const users = await getDatabase(title);
  res.json(users);
});

app.listen(port, console.log(`Server started on ${port}`));