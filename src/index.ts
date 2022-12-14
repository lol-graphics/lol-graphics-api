import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import cors from "cors";
import { jobSaveDataSummonerGrath } from "./jobs/jobs";

AppDataSource.initialize().then(() => {
  //Jobs
  //jobSaveDataSummonerGrath()

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(routes);

  app.get("/api/", (req, res) => {
    return res.json("Tudo Certo!");
  });

  return app.listen(process.env.PORT);
});
