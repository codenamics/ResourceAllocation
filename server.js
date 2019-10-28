const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
    })
  );
  

connectDB();


app.use(
  express.json({
    extended: false
  })
);

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/allocation", require("./routes/api/allocation"));
app.use("/api/admin", require("./routes/api/admin"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started"));
