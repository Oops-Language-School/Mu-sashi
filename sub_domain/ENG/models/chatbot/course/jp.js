const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JPCourse_Schema= new Schema({
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
const JP_Course= mongoose.model('JPCourse_Schema',JPCourse_Schema, 'JP_Course');
//JPCourse_Schema.index({end_date: 1},{expireAfterSeconds: 1});

module.exports= JP_Course;