import { config } from 'dotenv';
import { Environment, envSchema } from '../helper';

config();

const ENV_VAR: {[key: string]: any} = new Environment(process.env)
  .filterEnv()
  .parseEnv()
  .validateEnv(envSchema).value;

export const NODE_ENV: string = ENV_VAR.NODE_ENV ?? 'development';
export const SERVER_PORT: number = ENV_VAR.SERVER_PORT ?? 4000;
export const SERVER_HOST: string = ENV_VAR.SERVER_HOST ?? 'localhost';
export const CORS_ORIGIN_URL: string[] = ENV_VAR.CORS_ORIGIN_URL ?? ['http://localhost:3000'];
