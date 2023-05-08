import express, { Request, Response } from "express";

const app = express();

app.listen(4000, () => {
  console.log(4000);
});

app.get("/test", (req: Request, res: Response) => {
  res.json("HAIYAAAA");
});
