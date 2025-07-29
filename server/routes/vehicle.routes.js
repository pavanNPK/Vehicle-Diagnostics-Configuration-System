import express from "express";
import { addVehicle, getVehicles } from "../controllers/vehicle.controller.js";

const router = express.Router();

/**
 * @swagger
 * /logs:
 *   get:
 *     summary: Get all vehicle logs or filter by query params
 *     tags:
 *       - Vehicles
 *     parameters:
 *       - in: query
 *         name: vehicle
 *         schema:
 *           type: string
 *         description: Vehicle ID to filter
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         description: Error code to filter
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for range (YYYY-MM-DD)
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for range (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Logs retrieved successfully
 */
router.get("/", getVehicles);

/**
 * @swagger
 * /logs:
 *   post:
 *     summary: Add a new vehicle log with date range
 *     tags:
 *       - Vehicles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - vehicleId
 *               - errorCode
 *               - from
 *               - to
 *             properties:
 *               vehicleId:
 *                 type: string
 *                 example: "1234"
 *               errorCode:
 *                 type: string
 *                 example: "U0420"
 *               from:
 *                 type: string
 *                 format: date
 *                 example: "2025-07-24"
 *               to:
 *                 type: string
 *                 format: date
 *                 example: "2025-07-29"
 *     responses:
 *       201:
 *         description: Vehicle added successfully
 *       409:
 *         description: Conflict or duplicate entry
 */
router.post("/", addVehicle);

export default router;
