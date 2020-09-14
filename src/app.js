import 'dotenv/config';
import express from 'express';

import cors from 'cors';
import routes from './routes';

import './database'; // Inicializa db;

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
    this.serverHttp = this.app;
  }

  middlewares() {
    this.app.use(express.json({ limit: '5000kb' })); // Permite body em JSON
    this.app.use(cors()); // Permite chamadas do mesmo domínio
  }

  routes() {
    this.app.use(routes); // Atribui rotas;
  }
}

export default new App();
