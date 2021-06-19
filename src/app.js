import express from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
