const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
} = require('../controllers/classController');

router.get('/', authMiddleware, getAllClasses);
router.get('/:id', authMiddleware, getClassById);
router.post('/', authMiddleware, createClass);
router.put('/:id', authMiddleware, updateClass);
router.delete('/:id', authMiddleware, deleteClass);

module.exports = router;
