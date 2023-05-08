import express from "express";
const app = express();
app.listen(4000, () => {
  console.log(4000);
  console.log("testing testing");
});
app.get("/test", (req, res) => {
  res.json("HAIYAAAA");
});
//# sourceMappingURL=server.js.map
