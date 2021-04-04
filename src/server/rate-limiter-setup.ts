import { Express } from 'express';
import rateLimit from 'express-rate-limit';
import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW } from '../config';

export default function rateLimiterSetup(app: Express) {
  app.use(
    rateLimit({
      windowMs: RATE_LIMIT_WINDOW,
      max: RATE_LIMIT_MAX,
    })
  );
}
