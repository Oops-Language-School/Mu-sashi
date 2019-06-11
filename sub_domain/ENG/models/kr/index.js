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
const TeacherSchema = new Schema({         
    fifth_image: String,
    fifth_title: String,
    fifth_intro: String,
    fifth_fb_link: String,
    fifth_twitter_link: String,
    fifth_ig_link: String,
    fifth_skype_link: String,
});
const IndexSchema= new Schema({
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

    //course
    forth_title: String,
    forth_content: String,
    //popular_course:[PopularCourseSchema],

    num_of_teachers: String,
    num_of_activities: String,
    num_of_coop_schools: String,
    num_of_students: String,
    
    //teachers
    fifth_title: String,
    fifth_content: String,
    //fifth_teachers: [TeacherSchema],

    //recent activity
    sixth_title: String,
    sixth_content: String,

    //memory(pics)
    seventh_title: String,
    seventh_content: String,
    seventh_img_title: String,
    seventh_img: String,

    //student feedback
    eighth_title: String,
    eighth_img: String,
    eighth_content: String,
    eighth_name: String,
    eighth_desc: String,
    
    // latest news (or other courses)

    //index footer imgs
    footer_img:[String],


    //end_time:String,
    //time_type:String,
    //teacher_name: String,
    //min_students: String,
    //fee: String,
    createdAt:{ type: Date, default:Date.now },
})
// the third argment students(optional) => for mongodb name
const Kr_Index= mongoose.model('IndexSchema',IndexSchema, 'Kr_Index');
module.exports= Kr_Index;