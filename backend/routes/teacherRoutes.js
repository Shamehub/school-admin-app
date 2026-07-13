const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} = require('../controllers/teacherController');

router.get('/', authMiddleware, getAllTeachers);
router.get('/:id', authMiddleware, getTeacherById);
router.post('/', authMiddleware, createTeacher);
router.put('/:id', authMiddleware, updateTeacher);
router.delete('/:id', authMiddleware, deleteTeacher);

module.exports = router;
