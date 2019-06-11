const express = require('express');
const router = express.Router();

// jp start
router.get('/', (req, res, next) => {
    res.render('./oops/jp/about');
});
router.get('/about', (req, res, next) => {
    res.render('./oops/jp/about');
});
router.get('/announcement', (req, res, next) => {
    res.render('./oops/jp/announcement');
});
router.get('/activity', (req, res, next) => {
    res.render('./oops/jp/activity');
});
router.get('/exam-info', (req, res, next) => {
    res.render('./oops/jp/exam-info');
});
router.get('/over-sea-info', (req, res, next) => {
    res.render('./oops/jp/over-sea-info');
});
//news-study-abroad
router.get('/jp-news', (req, res, next) => {
    res.render('./oops/jp/jp-news');
});
router.get('/environment', (req, res, next) => {
    res.render('./oops/jp/environment');
});
router.get('/teachers', (req, res, next) => {
    res.render('./oops/jp/teachers');
});
router.get('/regulation', (req, res, next) => {
    res.render('./oops/jp/regulation');
});
router.get('/jp-course-list', (req, res, next) => {
    res.render('./oops/jp/jp-course-list');
});
router.get('/jp-course-info', (req, res, next) => {
    res.render('./oops/jp/jp-course-info');
});
router.get('/jp-course-detail', (req, res, next) => {
    res.render('./oops/jp/jp-course-detail');
});
router.get('/dispatch', (req, res, next) => {
    res.render('./oops/jp/dispatch');
});
router.get('/contact-us', (req, res, next) => {
    res.render('./oops/jp/contact_us');
});
router.get('/career', (req, res, next) => {
    res.render('./oops/jp/job-list');
});

router.get('/study-abroad-jp', (req, res, next) => {
    res.render('./oops/jp/study-abroad-jp');
});
router.get('/ajax-load/bootstrap-parent-modal.html', (req, res, next) => {
    res.render('./oops/bootstrap-parent-modal');

});

module.exports = router;
