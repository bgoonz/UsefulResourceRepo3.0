const express = require("express");
const server = express();

const knex = require("knex");

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(helmet());

// spinup test endpoint
server.get("/", (req, res) => {
  return res.status(200).json({ message: "Spinup Test Working" });
});

// stretch get for clients
server.get("/clients", async (req, res) => {
  try {
    const clients = await db("clients").select();
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json(err);
  }
});
// stretch post for clients
server.post("/clients", async (req, res) => {
  try {
    const clients = db("clients").insert(req.body);
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json(err);
  }
});

server.delete("/clients/:id", (req, res) => {
  res.status(200).json({ message: "client deleted" });
});

module.exports = server;
