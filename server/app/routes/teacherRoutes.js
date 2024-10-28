const { getAllTeachers, getTeachersFiltered, getTeacherById, updateTeacher, deleteTeacher, createTeachers, getProperties } = require('../controllers/teacherController');

const router = require('express').Router();

router.get('/', getAllTeachers);
router.get('/filtered', getTeachersFiltered)
router.post('/createTeacher',  createTeachers);
router.get('/teacher/:id', getTeacherById);
router.get('/teacher/:name', getProperties)
router.put('/teacher', updateTeacher);
router.delete('/teacher', deleteTeacher)

module.exports = router;