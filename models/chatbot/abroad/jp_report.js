const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jpAbroad_Schema= new Schema({
    fb_psid: String,
    country: String,
    location: String,
    school_type: String,
    departure_time: String,
    study_length: String,
    contact_time: String,
    selected_school: { type: Boolean, default:false },
    selected_school_name: String,
    name: String,
    phone: Number,
    lineID: String,
    createdAt:{ type: Date, default:Date.now },
})
// the third argment students(optional) => for mongodb name
const JP_Abroad_Report= mongoose.model('jpAbroad_Schema',jpAbroad_Schema, 'JP_Abroad_Report');
module.exports= JP_Abroad_Report;