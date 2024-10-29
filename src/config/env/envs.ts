import { BadRequestException } from "@nestjs/common";
import 'dotenv/config'
import * as joi from "joi";

type EnvVars = {
    PORT: number;
    SWAGGER_DOC_TITLE: string
    SWAGGER_DOC_DESCRIPTION: string
    SWAGGER_DOC_VERSION: string
}

const envsSchema = joi.object({
    // INITIAL
    PORT: joi.number().required(),
    // SWAGGER
    SWAGGER_DOC_TITLE: joi.string().required(),
    SWAGGER_DOC_DESCRIPTION: joi.string().required(),
    SWAGGER_DOC_VERSION: joi.string().required(),
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
};
