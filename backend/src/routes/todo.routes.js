import express from 'express';
import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodoOfUser,
} from '../controllers/todo.controller.js';
const router = express.Router();

router.post('/add', addTodo);
router.get('/get', getTodoOfUser);
router.put('/edit/:id', editTodo);
router.delete('/delete:id', deleteTodo);

export default router;
