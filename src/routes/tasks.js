const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/tasks', TaskController.index);
router.get('/tasks1', TaskController.index1);
router.get('/tasks2', TaskController.index2);
router.get('/create', TaskController.create);
router.get('/especialista', TaskController.especialista);
router.post('/create', TaskController.store);
router.post('/especialista', TaskController.store1);
router.post('/tasks/delete', TaskController.destroy);
router.post('/tasks/delete1', TaskController.destroy1);
router.get('/tasks/edit/:id', TaskController.edit)
router.get('/tasks/edit1/:id1', TaskController.edit1)
router.post('/tasks/edit/:id', TaskController.update)
router.post('/tasks/edit1/:id1', TaskController.update1)




module.exports = router;