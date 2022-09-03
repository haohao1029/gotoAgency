const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.get('/login', function (req, res) {
    res.render('auth/login');
});

router.get('/datatable_test', function (req, res) {
    console.log(req)
});

router.get('/member', function (req, res) {
    res.render('member/index');
}

);
router.get('/member_group', function (req, res) {
    res.render('member/group');
});

router.get('/sales', function (req, res) {
    res.render('sales/index');
});
router.get('/commission', function (req, res) {
    res.render('report/commission');
});
router.get('/lucky_number', function (req, res) {
    res.render('report/lucky_number');
});
router.get('/winning', function (req, res) {
    res.render('report/winning');
});
module.exports = router;