import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import cors from 'cors';

export default class Server {

   constructor() {
      this.port = process.env.PORT;
      this.app = express();

      this.paths = {
         web: '/'
      };

      // Middlewares
      this.middlewares();

      // Routes app
      this.routes();
   }

   middlewares() {

      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      this.app.use(cors());

      this.app.use(express.json());
      this.app.use('/', express.static(path.join(__dirname, '../public')));

   }

   routes() {
      // this.app.use(this.paths.web, webRouter);
   }

   listen() {
      this.app.listen(this.port, () => {
         console.log('Server on port ->', this.port);
      });
   }
}