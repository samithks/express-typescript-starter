import cors from 'cors';
import { Express } from 'express';
import { CORS_ORIGIN_URL } from '../config';

export default function corsSetup(app: Express) {
  app.use(
    cors({
      credentials: true,
      origin: CORS_ORIGIN_URL,
    })
  );
}
