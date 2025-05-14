import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Working again");
});

app.listen(5007, () => {
  console.log(`Server is listening on 5007`);
});
