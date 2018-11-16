const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const engAbroad_Schema= new Schema({
    fb_psid: String,
    country: String,
    school_type: String,
    departure_time: Date,
    contact_time: String,
    selected_school: { type: Boolean, default:false },
    selected_school_name: String,
    name: String,
    phone: Number,
    lineID: String,
    createdAt:{ type: Date, default:Date.now },
})
// the third argment students(optional) => for mongodb name
const ENG_Abroad_Report= mongoose.model('engAbroad_Schema',engAbroad_Schema, 'ENG_Abroad_Report');
module.exports= ENG_Abroad_Report;