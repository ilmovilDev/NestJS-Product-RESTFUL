import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export function cors(): CorsOptions {
    return {
        origin: [
            'https://my-site.com', 
            'https://another-site.com', 
            'http://localhost:5173' // Permitir peticiones desde localhost
        ],
        methods: 'GET,POST,PUT,PATCH,DELETE', // Métodos permitidos
        allowedHeaders: 'Content-Type, Authorization', // Encabezados permitidos
        credentials: true, // Permitir envío de cookies
        preflightContinue: false, // Controlar el flujo de las solicitudes preflight
    };
}
