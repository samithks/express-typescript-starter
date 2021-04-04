import express from 'express';
import helmet from 'helmet';
import responseTime from 'response-time';
import api from '../api';
import { SERVER_HOST, SERVER_PORT } from '../config';
import { HTTP, SEVER_STARTED } from '../const';
import accessLog from './access-log';
import corsSetup from './cors-setup';
import rateLimiterSetup from './rate-limiter-setup';
import { swaggerSetup } from './swagger-docs';

export const startServer = async () => {
  const app = express();
  corsSetup(app);
  app.use(helmet());
  app.use(responseTime());
  accessLog(app);
  rateLimiterSetup(app);
  app.use(express.json());
  app.use('/', api);
  swaggerSetup(app);
  app.listen(SERVER_PORT, () => {
    console.log(`${SEVER_STARTED} ${HTTP}://${SERVER_HOST}:${SERVER_PORT}`);
  });
};
