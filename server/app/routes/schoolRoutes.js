const { getAllSchools, createSchools, getSchoolById, updateSchool, deleteSchool } = require('../controllers/schoolController');

const router = require('express').Router();

router.get('/', getAllSchools);
router.post('/schools',  createSchools);
router.get('/school/:id', getSchoolById);
router.put('/school', updateSchool);
router.delete('/school', deleteSchool)

module.exports = router;