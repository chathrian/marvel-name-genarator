import { mongoose } from "mongoose";

const MarvelnameSchema = new mongoose.Schema({
    Uname: String,
    Mname: String,
    Num: Number
  });

export const Marvelname = mongoose.model('Marvelname', MarvelnameSchema);
// const mongoose = require('mongoose');

// const myDataSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     // Add more fields as needed
// });

// module.exports = mongoose.model('MyData', myDataSchema);
