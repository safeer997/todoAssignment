import data from '../utils/data.js';

export const getTodoOfUser = (req, res) => {
  const { username } = req.params;

  if (!username || username.trim() == '') {
    res.status(401).json({
      success: false,
      message: 'username is required',
    });
  }

  const userTodo = data.filter((data) => data.user == username);
  res.status(200).json({
    success: true,
    message: 'user todo fetched successfully',
    data: userTodo,
  });
};

export const addTodo = (req, res) => {
  const { title, content, username } = req.body;

  if (!title || !content || !username) {
    return res.status(400).json({
      success: false,
      message: 'Title, content, and user are required',
    });
  }

  const todo = {
    id: Date.now().toString(),
    user: username,
    title,
    content,
  };

  data.push(todo);

  res.status(201).json({
    success: true,
    message: 'Note added successfully',
    data: todo,
  });
};

export const editTodo = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: 'Title and content are required',
    });
  }

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'id is required',
    });
  }

  const editTodoIndex = data.findIndex((todo) => todo.id == id);

  if (editTodoIndex == -1) {
    return res.status(400).json({
      success: false,
      message: 'no todo found with this id',
    });
  }

  data[editTodoIndex] = { ...data[editTodoIndex], title, content };

  res.status(200).json({
    success: true,
    message: 'todo updated successfully',
    data: data[noteIndex],
  });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'id is required',
    });
  }

  const editTodoIndex = data.findIndex((todo) => todo.id == id);

  if (editTodoIndex == -1) {
    return res.status(400).json({
      success: false,
      message: 'no todo found with this id',
    });
  }

  data.splice(editTodoIndex, 1); //learn splice method more

  res.status(200).json({
    success: true,
    message: 'todo deleted successfully',
  });
};
