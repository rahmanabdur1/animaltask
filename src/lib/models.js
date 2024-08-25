const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
}, { timestamps: true });


export const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema);
export const Animal = mongoose.models?.Animal || mongoose.model("Animal", animalSchema);