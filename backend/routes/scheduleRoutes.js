const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require('../controllers/scheduleController');

router.get('/', authMiddleware, getAllSchedules);
router.get('/:id', authMiddleware, getScheduleById);
router.post('/', authMiddleware, createSchedule);
router.put('/:id', authMiddleware, updateSchedule);
router.delete('/:id', authMiddleware, deleteSchedule);

module.exports = router;
