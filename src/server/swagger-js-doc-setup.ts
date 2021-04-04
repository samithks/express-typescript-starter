import { join } from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import { BASE_PATH, DESCRIPTION, SERVER_HOST, SERVER_PORT, VERSION } from '../config';
import { HTTP } from '../const';

export function swaggerJSDocSetup() {
  const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Express TypeScript bootstrap',
        description: DESCRIPTION,
        version: VERSION,
      },
      servers: [
        {
          url: `${HTTP}://${SERVER_HOST}:${SERVER_PORT}${BASE_PATH}`,
          description: 'Development server',
        },
      ],
    },
    apis: [join(__dirname, '../api/**/routes/**/docs/*.yaml')],
  };
  return swaggerJSDoc(options);
}
