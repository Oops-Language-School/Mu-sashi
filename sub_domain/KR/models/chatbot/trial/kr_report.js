const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const krTrial_report_Schema= new Schema({
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
const KR_Trial_Report= mongoose.model('krTrial_report_Schema',krTrial_report_Schema, 'KR_Trial_Report');
module.exports= KR_Trial_Report;