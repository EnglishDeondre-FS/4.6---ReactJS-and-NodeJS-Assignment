const express = require('express');
const router = express.Router();
const schoolRoutes = require('./schoolRoutes');
const teacherRoutes = require('./teacherRotues');

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: `${req.method} - Request Made`
    })
});

router.use('/school', schoolRoutes);
router.use('/teacher', teacherRoutes);

module.exports = router;