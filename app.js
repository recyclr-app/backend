require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");
app.set("port", process.env.PORT || PORT);

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Debugger Log Middleware
const requestLogger = require("./middleware/request_logger");
app.use(requestLogger);

// Forward request to /app
app.get("/", (req, res) => {
  res.send("Welcome to the recyclr app");
});

// Controllers
const appController = require("./controllers/appController");
app.use("/app", appController);

const cvController = require("./controllers/cvController");
app.use("/cv", cvController);

const userController = require("./controllers/userController");
app.use("/users", userController);

const historyController = require("./controllers/historyController");
app.use("/history", historyController);

app.listen(app.get("port"), () => {
  console.log(`🏃 on port: ${app.get("port")}, better catch it!`);
});
