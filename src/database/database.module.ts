import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from 'src/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [],
            inject: [],
            useFactory: async() => ({
                type: 'postgres',
                host: envs.dbHost,
                port: Number(envs.dbPort),
                database: envs.dbName,
                username: envs.dbUser,
                password: envs.dbPassword,
                autoLoadEntities: true,
                synchronize: true, // Do not use in production, only in development
            })
        })
    ]
})
export class DatabaseModule {}
