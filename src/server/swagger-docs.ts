import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerJSDocSetup } from './swagger-js-doc-setup';

export function swaggerSetup(app: Express) {
  app.use('/explorer', swaggerUi.serve, swaggerUi.setup(swaggerJSDocSetup()));
}
