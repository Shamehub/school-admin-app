const { v4: uuidv4 } = require('uuid');

// Mock database
let classes = [
  {
    id: '1',
    name: 'X-A',
    grade: '10',
    totalStudents: 30,
    waliKelas: 'Ibu Siti',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'X-B',
    grade: '10',
    totalStudents: 28,
    waliKelas: 'Pak Budi',
    createdAt: new Date(),
  },
];

const getAllClasses = (req, res) => {
  try {
    res.json({ success: true, data: classes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClassById = (req, res) => {
  try {
    const { id } = req.params;
    const classData = classes.find((c) => c.id === id);

    if (!classData) {
      return res.status(404).json({ message: 'Class not found' });
    }

    res.json({ success: true, data: classData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClass = (req, res) => {
  try {
    const { name, grade, totalStudents, waliKelas } = req.body;

    if (!name || !grade) {
      return res.status(400).json({ message: 'Name and grade are required' });
    }

    const newClass = {
      id: uuidv4(),
      name,
      grade,
      totalStudents: totalStudents || 0,
      waliKelas,
      createdAt: new Date(),
    };

    classes.push(newClass);
    res.status(201).json({ success: true, data: newClass });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateClass = (req, res) => {
  try {
    const { id } = req.params;
    const { name, grade, totalStudents, waliKelas } = req.body;

    const classData = classes.find((c) => c.id === id);
    if (!classData) {
      return res.status(404).json({ message: 'Class not found' });
    }

    Object.assign(classData, { name, grade, totalStudents, waliKelas });
    res.json({ success: true, data: classData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClass = (req, res) => {
  try {
    const { id } = req.params;
    const index = classes.findIndex((c) => c.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Class not found' });
    }

    classes.splice(index, 1);
    res.json({ success: true, message: 'Class deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
};
