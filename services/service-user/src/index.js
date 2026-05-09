const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const serviceName = process.env.SERVICE_NAME || "service-user";

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: serviceName,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`${serviceName} running on port ${port}`);
});
