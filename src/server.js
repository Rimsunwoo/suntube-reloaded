import express from "express";

const app = express();
const PORT = 5000;

const handleListen = () => {
  console.log("The server open");
};

const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const protectMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>You are protected</h1>");
  }
  next();
};
const handleHome = (req, res, next) => {
  res.send("Hello this is local host 5000");
};
const privateServer = (req, res) => {
  return res.send("<h1>Welcome to the private server</h1>");
};

app.use(loggerMiddleware);
app.use(protectMiddleware);
app.get("/", handleHome);
app.get("/private", privateServer);

app.listen(PORT, handleListen);
