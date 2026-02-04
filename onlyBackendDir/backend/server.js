const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/backendDB")
  .then(() => console.log("MongoDB Connected"));

// app.get("/", (req, res) => {
//   res.send("get call Backend Running");
// });

app.use("/api", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});


