const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema
const Toy = new mongoose.Schema({
    name: { type: String, require: true,},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    level: {type: String, maxLength: 255},
    price: {type: String, maxLength: 255},
    slug: { type: String, slug: 'name',unique: true },
},{
    timestamps: true,
}
);

module.exports = mongoose.model('Toy', Toy)