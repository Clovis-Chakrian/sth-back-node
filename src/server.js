import "dotenv/config";
import cors from "cors";
import express from "express";
import { routes } from "./api/index.js";
import { sequelizeConnection } from "./infra/persistence/sequelizeConfig.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

sequelizeConnection.sync({ force: process.env.ERASE_DATABASE_ON_SYNC }).then(async () => {
  app.listen(port, () => {
    console.clear();
    console.log(`\nThe app are listen at port ${port}`);
    console.log(`You can access the app from http://localhost:${port}`);
    console.log(`The base path of the api is '/api'`);
  }).on('request', (req, res) => {
    console.log(req.url);
  });
});