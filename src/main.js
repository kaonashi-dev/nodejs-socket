import * as dotenv from 'dotenv';
dotenv.config();

import Server from './app/server';

const server = new Server();

server.listen();