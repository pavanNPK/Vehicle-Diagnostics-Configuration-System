// === Core Modules ===
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// === Third-Party Modules ===
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';

// === App Modules ===
import vehicleRouter from './routes/vehicle.routes.js';
import { swaggerSpec } from './swagger/swaggerConfig.js';

dotenv.config(); // Load .env early

// === __dirname workaround ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === Express App Initialization ===
const app = express();

// === Middlewares ===
app.use(express.json());
app.use(cors());
app.use(helmet({ xPoweredBy: false }));
app.use(mongoSanitize({
    replaceWith: '_',
    allowDots: true, // Allow dots in keys
    // Don't specify sanitizeObjects to use defaults
}));
app.use(xss());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// === Rate Limiting ===
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// === Root Route ===
app.get('/', (req, res) => res.send('🚗 Vehicle Diagnostics API is running...'));

// === API Routes ===
app.use('/logs', vehicleRouter);

// === Swagger API Docs ===
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
        explorer: true,
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: '🚗 Vehicle Diagnostics API Docs',
    })
);

// === MongoDB Connection ===
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });

// === Server Startup ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
    console.log(`📘 API Docs: http://localhost:${PORT}/api-docs`);
});
