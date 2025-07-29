import mongoose from 'mongoose';
import Vehicle from '../models/vehicle.model.js';


// Get all vehicles or filter by vehicleId, errorCode, or date range
export const getVehicles = async (req, res) => {
    try {
        const { vehicle, code, from, to } = req.query;

        let filter = {};

        if (vehicle) filter.vehicleId = vehicle;
        if (code) filter.errorCode = code;

        if (from && to) {
            filter.$and = [
                { from: { $lte: new Date(to) } },
                { to: { $gte: new Date(from) } }
            ];
        }

        console.log(filter, '....filter')
        const vehicles = await Vehicle.find(filter, null, {
            lean: true,
        }).sort({ timeStamp: -1 });

        console.log(vehicles, '....vehicles')
        res.status(200).json({
            success: true,
            data: vehicles,
            message: 'Vehicles fetched successfully',
        });
    } catch (error) {
        res
            .status(500)
            .json({ success: false, message: error.message, data: null });
    }
};

// Add a new vehicle log
export const addVehicle = async (req, res) => {
    console.log(req.body, '....')
    try {
        const vehicleData = req.body;

        // Optional: Check for duplicates manually if needed
        const existingVehicle = await Vehicle.findOne({
            vehicleId: vehicleData.vehicleId,
        }, {}, {
            lean: true});

        if (existingVehicle) {
            return res.status(409).json({
                success: false,
                data: null,
                message: 'Vehicle with same ID already exists',
            });
        }

        const vehicle = new Vehicle(vehicleData);
        await vehicle.save();

        res.status(201).json({
            success: true,
            data: vehicle,
            message: 'Vehicle added successfully',
        });
    } catch (error) {
        console.error('Error adding vehicle:', error);

        // Handle different error types
        if (error.code === 11000) {
            res.status(409).json({
                success: false,
                data: null,
                message: 'Duplicate vehicle record'
            });
        } else {
            res.status(500).json({
                success: false,
                data: null,
                message: error.message || 'Internal server error'
            });
        }
    }
};
