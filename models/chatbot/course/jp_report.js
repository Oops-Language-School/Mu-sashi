const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jpCourse_report_Schema= new Schema({
    fb_psid: String,
    lang_type: String,
    course_type: String,
    teaching_method: String,
    available_time: String,
    available_begin_date: Date,
    name: String,
    phone: Number,
    lineID: String,
    contact_time: String,
    createdAt:{ type: Date, default:Date.now }
})
// the third argment students(optional) => for mongodb name
const JP_Course_Report= mongoose.model('jpCourse_report_Schema',jpCourse_report_Schema, 'JP_Course_Report');
module.exports= JP_Course_Report;