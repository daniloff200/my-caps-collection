const mongoose = require('mongoose');

const capSchema = new mongoose.Schema({
    name: String,
    text: String,
    brewery: String,
    country: String,
    image : String,
    myUniqueID: Number
}, { timestamps: true });

const Cap = mongoose.model('Todo', capSchema);

module.exports = Cap;
