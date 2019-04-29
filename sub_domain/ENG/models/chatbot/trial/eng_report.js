const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const engTrial_report_Schema= new Schema({
    fb_psid: String,
    lang_type: String,
    course_time: String,
    level: String,
    level_content: String,
    name: String,
    phone: Number,
    lineID: String,
    createdAt:{ type: Date, default:Date.now },
})
// the third argment students(optional) => for mongodb name
const ENG_Trial_Report= mongoose.model('engTrial_report_Schema',engTrial_report_Schema, 'ENG_Trial_Report');
module.exports= ENG_Trial_Report;