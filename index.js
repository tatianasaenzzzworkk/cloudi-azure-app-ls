const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("text").send("Holaaa! Soy Laura Saenz :D");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", owner: "Laura Saenz" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});