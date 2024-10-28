const router = require('express').Router();
const teacherRouter = require('./routes/teacherRoutes');
const schoolRoutes = require('./routes/schoolRoutes');

router.get('/', (req, res) => {
    res.json({
        success: true,
    }); 
});

router.use('/', teacherRouter);
router.use('/', schoolRoutes);

module.exports = router;