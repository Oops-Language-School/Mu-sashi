const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ENG_FreeTrial_Schema= new Schema({
    lang_type: String,
    course_type: String,
    level: String,
    course_date: { type: Date, expires: 3 ,default: Date.now,},
    dayOfWeek: String,
    begin_time: String,
    end_time: String,
    content: String,
    createdAt:{ type: Date, default:Date.now },
})
// the third argment students(optional) => for mongodb name
const ENG_Trial= mongoose.model('ENG_FreeTrial_Schema',ENG_FreeTrial_Schema, 'ENG_Trial');
module.exports= ENG_Trial;