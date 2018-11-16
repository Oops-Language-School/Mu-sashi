const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jpTrial_report_Schema= new Schema({
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
const JP_Trial_Report= mongoose.model('jpTrial_report_Schema',jpTrial_report_Schema, 'JP_Trial_Report');
module.exports= JP_Trial_Report;