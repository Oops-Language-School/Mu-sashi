const express = require('express');
const router = express.Router();

// kr start
router.get('/', (req, res, next) => {
    res.render('./oops/kr/about');
});
router.get('/about', (req, res, next) => {
    res.render('./oops/kr/about');
});
router.get('/announcement', (req, res, next) => {
    res.render('./oops/kr/announcement');
});
router.get('/activity', (req, res, next) => {
    res.render('./oops/kr/activity');
});
router.get('/exam-info', (req, res, next) => {
    res.render('./oops/kr/exam-info');
});
router.get('/over-sea-info', (req, res, next) => {
    res.render('./oops/kr/over-sea-info');
});
//news-study-abroad
router.get('/kr-news', (req, res, next) => {
    res.render('./oops/kr/kr-news');
});
router.get('/environment', (req, res, next) => {
    res.render('./oops/kr/environment');
});
router.get('/teachers', (req, res, next) => {
    res.render('./oops/kr/teachers');
});
router.get('/regulation', (req, res, next) => {
    res.render('./oops/kr/regulation');
});
router.get('/kr-course-list', (req, res, next) => {
    res.render('./oops/kr/kr-course-list');
});
router.get('/kr-course-info', (req, res, next) => {
    res.render('./oops/kr/kr-course-info');
});
router.get('/kr-course-detail', (req, res, next) => {
    res.render('./oops/kr/kr-course-detail');
});
router.get('/dispatch', (req, res, next) => {
    res.render('./oops/kr/dispatch');
});
router.get('/contact-us', (req, res, next) => {
    res.render('./oops/kr/contact_us');
});
router.get('/career', (req, res, next) => {
    res.render('./oops/kr/job-list');
});

router.get('/study-abroad-kr', (req, res, next) => {
    res.render('./oops/kr/study-abroad-kr');
});
router.get('/ajax-load/bootstrap-parent-modal.html', (req, res, next) => {
    res.render('./oops/bootstrap-parent-modal');

});

module.exports = router;
