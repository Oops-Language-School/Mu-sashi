const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('./oops/index-home-variation-video-background');
});

router.get('/about', (req, res, next) => {
    res.render('./oops/page-about-style2');
});
router.get('/environment', (req, res, next) => {
    res.render('./oops/page-services-details');
});
router.get('/teachers', (req, res, next) => {
    res.render('./oops/page-teachers-style2');
});
router.get('/regulation', (req, res, next) => {
    res.render('./oops/features-header-style1');
});
router.get('/announcement', (req, res, next) => {
    res.render('./oops/blog-classic-both-sidebar');
});
router.get('/activity', (req, res, next) => {
    res.render('./oops/blog-timeline');
});
router.get('/exam-info', (req, res, next) => {
    res.render('./oops/blog-classic-left-sidebar');
});
router.get('/over-sea-info', (req, res, next) => {
    res.render('./oops/over-sea-info');
});
router.get('/news-study-abroad', (req, res, next) => {
    res.render('./oops/news-study-abroad');
});
router.get('/jp-course-list', (req, res, next) => {
    res.render('./oops/jp-course-list');
});
router.get('/kr-course-list', (req, res, next) => {
    res.render('./oops/kr-course-list');
});
router.get('/eng-course-list', (req, res, next) => {
    res.render('./oops/eng-course-list');
});

router.get('/course-info', (req, res, next) => {
    res.render('./oops/course-info');
});

router.get('/study-abroad-jp', (req, res, next) => {
    res.render('./oops/study-abroad-jp');
});
router.get('/study-abroad-kr', (req, res, next) => {
    res.render('./oops/study-abroad-kr');
});
router.get('/study-abroad-us', (req, res, next) => {
    res.render('./oops/study-abroad-us');
});
router.get('/study-abroad-ca', (req, res, next) => {
    res.render('./oops/study-abroad-ca');
});
router.get('/study-abroad-uk', (req, res, next) => {
    res.render('./oops/study-abroad-uk');
});
router.get('/study-abroad-au', (req, res, next) => {
    res.render('./oops/study-abroad-au');
});
router.get('/study-abroad-nz', (req, res, next) => {
    res.render('./oops/study-abroad-nz');
});
router.get('/study-abroad-ph', (req, res, next) => {
    res.render('./oops/study-abroad-ph');
});
router.get('/study-abroad-sg', (req, res, next) => {
    res.render('./oops/study-abroad-sg');
});
router.get('/study-abroad-my', (req, res, next) => {
    res.render('./oops/study-abroad-my');
});
router.get('/contact-us', (req, res, next) => {
    res.render('./oops/page-contact6-with-multiple-marker');
});

router.get('/career', (req, res, next) => {
    res.render('./oops/job-list');
});

router.get('/kr-index', (req, res, next) => {
    res.render('./oops/kr-index');
});
router.get('/kr-index/kr-course-list', (req, res, next) => {
    res.render('./oops/kr/kr-course-list');
});
router.get('/kr-index/kr-course-info', (req, res, next) => {
    res.render('./oops/kr/kr-course-info');
});


router.get('/jp-index', (req, res, next) => {
    res.render('./oops/jp-index');
});
router.get('/jp-index/jp-course-list', (req, res, next) => {
    res.render('./oops/jp/jp-course-list');
});
router.get('/jp-index/jp-course-info', (req, res, next) => {
    res.render('./oops/jp/jp-course-info');
});


router.get('/eng-index', (req, res, next) => {
    res.render('./oops/eng/eng-index');
});
router.get('/eng-index/eng-course-list', (req, res, next) => {
    res.render('./oops/eng/eng-course-list');
});
router.get('/eng-index/eng-course-info', (req, res, next) => {
    res.render('./oops/eng/eng-course-info');
});


router.get('/ajax-load/bootstrap-parent-modal.html', (req, res, next) => {
    res.render('./oops/bootstrap-parent-modal');

});

module.exports = router;
