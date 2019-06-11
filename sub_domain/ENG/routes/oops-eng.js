const express = require('express');
const router = express.Router();

// eng start
router.get('/', (req, res, next) => {
    res.render('./oops/eng/about');
});
router.get('/about', (req, res, next) => {
    res.render('./oops/eng/about');
});
router.get('/announcement', (req, res, next) => {
    res.render('./oops/eng/announcement');
});
router.get('/activity', (req, res, next) => {
    res.render('./oops/eng/activity');
});
router.get('/exam-info', (req, res, next) => {
    res.render('./oops/eng/exam-info');
});
router.get('/over-sea-info', (req, res, next) => {
    res.render('./oops/eng/over-sea-info');
});
//news-study-abroad
router.get('/eng-news', (req, res, next) => {
    res.render('./oops/eng/eng-news');
});
router.get('/environment', (req, res, next) => {
    res.render('./oops/eng/environment');
});
router.get('/teachers', (req, res, next) => {
    res.render('./oops/eng/teachers');
});
router.get('/regulation', (req, res, next) => {
    res.render('./oops/eng/regulation');
});
router.get('/eng-course-list', (req, res, next) => {
    res.render('./oops/eng/eng-course-list');
});
router.get('/eng-course-info', (req, res, next) => {
    res.render('./oops/eng/eng-course-info');
});
router.get('/eng-course-detail', (req, res, next) => {
    res.render('./oops/eng/eng-course-detail');
});
router.get('/dispatch', (req, res, next) => {
    res.render('./oops/eng/dispatch');
});
router.get('/contact-us', (req, res, next) => {
    res.render('./oops/eng/contact_us');
});
router.get('/career', (req, res, next) => {
    res.render('./oops/eng/job-list');
});

router.get('/study-abroad-eng', (req, res, next) => {
    res.render('./oops/eng/study-abroad-eng');
});
router.get('/ajax-load/bootstrap-parent-modal.html', (req, res, next) => {
    res.render('./oops/bootstrap-parent-modal');

});

module.exports = router;
