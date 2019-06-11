const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NavSchema = new Schema({ list1: [String] , list2: [String] });

const Navigation= new Schema({
    phone: String,
    time: String,
    email:String,
    kr_logo: String,
    jp_logo: String,
    eng_logo: String,
    kr_website: String,
    jp_website: String,
    eng_website: String,
    quick_link: {
        links: [{
            first: String,
            second: String,
            third: String,
          }]
    },
    nav_logo: String,
    first_nav: {
        links: [NavSchema],
    },
    second_nav: {
        links: [NavSchema],
    },
    third_nav: {
        links: [NavSchema],
    },
    forth_nav: {
        links: [NavSchema],
    },
    fifth_nav: {
        links: [NavSchema],
    },
    sixth_nav: {
        links: [NavSchema],
    },
    seventh_nav: {
        links: [NavSchema],
    },
    eighth_nav: {
        links: [NavSchema],
    },
    //footer
    footer_logo: String,
    footer_content: String,
    footer_findmore: String,
    footer_social_media:{
        type: [{
            fb: String,
            ig: String,
            youtube: String,
            twitter: String,
            skype: String,
            line: String,
            wechat: String,
            whatsapp: String,
        }]
    },
    footer_course: {
        image_first: String,
        cname_first: String,
        cdate_first: String,

        cname_second: String,
        cdate_first: String,
        image_second: String,

        cname_third: String,
        cdate_first: String,
        image_third: String,

        cname_forth: String,
        cdate_first: String,
        image_forth: String,
    },
    footer_links: {
        first:  String,
        second: String,
        third:  String,
        forth:  String,
        fifth:  String,
    },
    footer_about: {
        phone:  String,
        email:  String,
        address:  String,
    },
    createdAt:{ type: Date, default:Date.now },
});

function arrayLimit(val) {
    return val.length <= 10;
};

// the third argment students(optional) => for mongodb name
const Kr_Nav= mongoose.model('Navigation', Navigation, 'Kr_Nav');
module.exports= Kr_Nav;