const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('./oops/index');
});

router.get('/about', (req, res, next) => {
    res.render('./oops/about');
});
router.get('/environment', (req, res, next) => {
    res.render('./oops/environment');
});
router.get('/teachers', (req, res, next) => {
    res.render('./oops/teachers');
});
router.get('/regulation', (req, res, next) => {
    res.render('./oops/regulation');
});
router.get('/announcement', (req, res, next) => {
    res.render('./oops/announcement');
});
router.get('/activity', (req, res, next) => {
    res.render('./oops/activity');
});
router.get('/exam-info', (req, res, next) => {
    res.render('./oops/exam-info');
});
// equal to kr-news/jp-news/eng-news
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
    res.render('./oops/contact_us');
});

router.get('/career', (req, res, next) => {
    res.render('./oops/job-list');
});
/*
// kr start
router.get('/kr-index', (req, res, next) => {
    res.render('./oops/kr/kr-index');
});
router.get('/kr-index/about', (req, res, next) => {
    res.render('./oops/kr/about');
});

router.get('/kr-index/announcement', (req, res, next) => {
    res.render('./oops/kr/announcement');
});

router.get('/kr-index/activity', (req, res, next) => {
    res.render('./oops/kr/activity');
});
router.get('/kr-index/exam-info', (req, res, next) => {
    res.render('./oops/kr/exam-info');
});
router.get('/kr-index/over-sea-info', (req, res, next) => {
    res.render('./oops/kr/over-sea-info');
});
//news-study-abroad
router.get('/kr-index/kr-news', (req, res, next) => {
    res.render('./oops/kr/kr-news');
});

router.get('/kr-index/environment', (req, res, next) => {
    res.render('./oops/kr/environment');
});
router.get('/kr-index/teachers', (req, res, next) => {
    res.render('./oops/kr/teachers');
});
router.get('/kr-index/regulation', (req, res, next) => {
    res.render('./oops/kr/regulation');
});

router.get('/kr-index/kr-course-list', (req, res, next) => {
    res.render('./oops/kr/kr-course-list');
});
router.get('/kr-index/kr-course-info', (req, res, next) => {
    res.render('./oops/kr/kr-course-info');
});
router.get('/kr-index/kr-course-detail', (req, res, next) => {
    res.render('./oops/kr/kr-course-detail');
});
router.get('/kr-index/dispatch', (req, res, next) => {
    res.render('./oops/kr/dispatch');
});
router.get('/kr-index/contact-us', (req, res, next) => {
    res.render('./oops/kr/contact_us');
});
router.get('/kr-index/career', (req, res, next) => {
    res.render('./oops/kr/job-list');
});

// jp start
router.get('/jp-index', (req, res, next) => {
    res.render('./oops/jp/jp-index');
});
router.get('/jp-index/about', (req, res, next) => {
    res.render('./oops/jp/about');
});
router.get('/jp-index/announcement', (req, res, next) => {
    res.render('./oops/jp/announcement');
});
router.get('/jp-index/activity', (req, res, next) => {
    res.render('./oops/jp/activity');
});
router.get('/jp-index/exam-info', (req, res, next) => {
    res.render('./oops/jp/exam-info');
});
router.get('/jp-index/over-sea-info', (req, res, next) => {
    res.render('./oops/jp/over-sea-info');
});
//news-study-abroad
router.get('/jp-index/jp-news', (req, res, next) => {
    res.render('./oops/jp/jp-news');
});
router.get('/jp-index/environment', (req, res, next) => {
    res.render('./oops/jp/environment');
});
router.get('/jp-index/teachers', (req, res, next) => {
    res.render('./oops/jp/teachers');
});
router.get('/jp-index/regulation', (req, res, next) => {
    res.render('./oops/jp/regulation');
});
router.get('/jp-index/jp-course-list', (req, res, next) => {
    res.render('./oops/jp/jp-course-list');
});
router.get('/jp-index/jp-course-info', (req, res, next) => {
    res.render('./oops/jp/jp-course-info');
});
router.get('/jp-index/kr-course-detail', (req, res, next) => {
    res.render('./oops/jp/jp-course-detail');
});
router.get('/jp-index/dispatch', (req, res, next) => {
    res.render('./oops/jp/dispatch');
});
router.get('/jp-index/contact-us', (req, res, next) => {
    res.render('./oops/jp/contact_us');
});
router.get('/jp-index/career', (req, res, next) => {
    res.render('./oops/jp/job-list');
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
*/

router.get('/ajax-load/bootstrap-parent-modal.html', (req, res, next) => {
    res.render('./oops/bootstrap-parent-modal');

});

module.exports = router;
