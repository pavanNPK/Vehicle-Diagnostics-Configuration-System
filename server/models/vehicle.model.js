import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    vehicleId: { type: String, required: true },
    errorCode: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
});

// Create compound unique index - combination must be unique
vehicleSchema.index(
    { vehicleId: 1},
    { unique: true }
);
const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
