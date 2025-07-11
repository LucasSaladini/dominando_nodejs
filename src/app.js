import express from "express";
import Youch from "youch";
import "express-async-errors";
import "dotenv/config"
import routes from "./routes.js";
import './database/index.js'

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if(process.env.NODE_ENV === "development") {
        const errors = await new Youch(err, req).toJSON();
        
        return res.status(500).json(errors);
      }
    })
  }
}

export default new App().server;
