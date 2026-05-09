const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = Number(process.env.PORT || 3003);
const serviceLabel = process.env.SERVICE_LABEL || "Service 3";
const colorA = process.env.COLOR_A || "#110ebb";
const colorB = process.env.COLOR_B || "#bb113b";

const servicePath =
  "/" +
  serviceLabel
    .toLowerCase()
    .replace(/\s+/g, "-");

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: serviceLabel
  });
});

app.get(`${servicePath}/health`, (req, res) => {
  res.json({
    status: "ok",
    service: serviceLabel
  });
});

const renderPage = (req, res) => {
  res.send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />

    <title>${serviceLabel}</title>

    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: Arial, sans-serif;
        background: linear-gradient(
          135deg,
          ${colorA},
          ${colorB}
        );
      }

      .card {
        padding: 28px 40px;
        border-radius: 16px;
        background: rgba(255,255,255,.2);
        border: 1px solid rgba(255,255,255,.35);
        color: #fff;
        text-align: center;
        backdrop-filter: blur(5px);
      }

      h1 {
        margin: 0;
        font-size: 48px;
      }

      p {
        margin: 8px 0 0;
        font-size: 18px;
      }

      .path {
        margin-top: 12px;
        font-size: 14px;
        opacity: .9;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <h1>${serviceLabel}</h1>

      <p>Microservice is running</p>

      <div class="path">
        Route: ${servicePath}
      </div>
    </div>
  </body>
</html>`);
};

app.get("/", renderPage);

app.get(servicePath, renderPage);

app.listen(port, "0.0.0.0", () => {
  console.log(
    `${serviceLabel} running on port ${port}`
  );
});