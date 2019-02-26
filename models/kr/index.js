const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PopularCourseSchema = new Schema({         
    forth_image: String,
    forth_intro: String,
    forth_title: String,
    forth_content: String,
    course_time: String,
    course_discount: String,
    course_period: String 
});
const Navigation= new Schema({
    top_title: String,
    title: String,
    content:String,
    content_link: String,
    location: String,
    social_media: String,
    time: String,
    phone: String,

    second_title: String,
    second_content: String,
    first_course_image: String,
    first_course_title: String,
    first_course_subtitle: String,
    first_course_link: String,
    second_course_image: String,
    second_course_title: String,
    second_course_subtitle: String,
    second_course_link: String,
    service_type: [String],

    third_title: String,
    third_image: String,
    first_intro_title: String,
    first_intro_subtitle: String,
    second_intro_title: String,
    second_intro_subtitle: String,
    third_intro_title: String,
    third_intro_subtitle: String,

    forth_title: String,
    forth_content: String,
    popular_course:[PopularCourseSchema],

    num_of_teachers: String,
    num_of_activities: String,
    num_of_coop_schools: String,
    num_of_students: String,
    
    fifth_title: String,
    fifth_content: String,
    

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