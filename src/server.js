import express from "express";
import logger from "morgan";
const app = express();
const PORT = 5000;
const loggerMiddleware = logger("dev");
const home = (req, res) => {
  console.log("I will respond");
  return res.send("Hello");
};
const login = (req, res) => {
  return res.send("login");
};

app.use(loggerMiddleware);
app.get("/", home);
app.get("/login", login);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
