import { BadRequestException } from "@nestjs/common";
import 'dotenv/config'
import * as joi from "joi";

type EnvVars = {
    PORT: number;
    // Swagger
    SWAGGER_DOC_TITLE: string
    SWAGGER_DOC_DESCRIPTION: string
    SWAGGER_DOC_VERSION: string
    // Database
    DB_PORT: number
    DB_HOST: string
    DB_NAME: string
    DB_USER: string
    DB_PASSWORD: string
}

const envsSchema = joi.object({
    // Initial
    PORT: joi.number().required(),
    // Swagger
    SWAGGER_DOC_TITLE: joi.string().required(),
    SWAGGER_DOC_DESCRIPTION: joi.string().required(),
    SWAGGER_DOC_VERSION: joi.string().required(),
    // Database
    DB_PORT: joi.number().required(),
    DB_HOST: joi.string().required(),
    DB_NAME: joi.string().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new BadRequestException(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    swaggerDocTitle: envVars.SWAGGER_DOC_TITLE,
    swaggerDocDescription: envVars.SWAGGER_DOC_DESCRIPTION,
    swaggerDocVersion: envVars.SWAGGER_DOC_VERSION,
    dbPort: envVars.DB_PORT,
    dbHost: envVars.DB_HOST,
    dbName: envVars.DB_NAME,
    dbUser: envVars.DB_USER,
    dbPassword: envVars.DB_PASSWORD
};
