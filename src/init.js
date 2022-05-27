import "dotenv/config";
import "./db";
import "./models/Video";
import app from "./server";

const PORT = 5005;

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};
console.log(process.env.COOKIE_SECRET);

app.listen(PORT, handleListening);
