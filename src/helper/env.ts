import Joi from 'joi';
import { ENV_KEYS } from '../config';
import { ENV_VALIDATION_ERROR } from '../const';
import { isValidJsonString } from './common';
import { ProcessEnv } from './interfaces';

export class Environment {
  private _env: Record<string, any>;
  constructor(env: ProcessEnv) {
    this._env = env;
  }

  /**
   * To filter the unwanted variable in the process.env
   *
   */
  public filterEnv() {
    this._env = Object.keys(this._env)
      .filter((keys) => ENV_KEYS.includes(keys))
      .reduce((env: Record<string, any>, key) => {
        env[key] = process.env[key];
        return env;
      }, {});
    return this;
  }

  /**
   * To parse the value of the environment variables
   *
   */
  public parseEnv() {
    this._env = Object.fromEntries(
      Object.entries(this._env).map(([k, v]) => [k, isValidJsonString(v) ? JSON.parse(v) : v])
    );
    return this;
  }

  /**
   * To validate the value of the environment variables
   *
   */
  public validateEnv(envSchema: Joi.ObjectSchema<any>) {
    const {value, error} = envSchema.prefs({errors: {label: 'key'}}).validate(this._env);

    if (error) {
      throw new Error(`${ENV_VALIDATION_ERROR} ${error.message}`);
    }

    this._env = value;
    return this;
  }

  public get value() {
    return this._env;
  }
}

/**
 * To JOI validation schema for environment variables
 *
 */
export const envSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development').required(),
    SERVER_PORT: Joi.number().positive().required(),
    SERVER_HOST: Joi.string().valid('localhost').required(),
    CORS_ORIGIN_URL: Joi.array().items(Joi.string()).min(1).required(),
  })
  .unknown();
