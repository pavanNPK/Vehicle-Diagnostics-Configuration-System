import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Vehicle Diagnostics API',
            version: '1.0.0',
            description: 'API for managing and querying vehicle diagnostic logs'
        },
        servers: [
            {
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./routes/*.js', './controllers/*.js', './models/*.js']
};

export const swaggerSpec = swaggerJSDoc(options);
