const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KRCourse_Schema= new Schema({
    lang_type: String,
    type: String,
    course_type:String,
    begin_date: Date,
    begin_dayOfWeek: String,
    end_date: { type: Date, expires: 3 ,default: Date.now,},
    end_dayOfWeek: String,
    begin_time: String,
    end_time:String,
    time_type:String,
    teacher_name: String,
    min_students: String,
    fee: String,
    createdAt:{ type: Date, default:Date.now },
})
// the third argment students(optional) => for mongodb name
const KR_Course= mongoose.model('KRCourse_Schema',KRCourse_Schema, 'KR_Course');
module.exports= KR_Course;