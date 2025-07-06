import React, { useState } from 'react';

function Dashboard() {
  const [todo, setTodo] = useState([]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);

  //taking username as dummy as we have not developed backend yet ;
  const username = 'safeer';

  const handleAdd = () => {
    if (isEditing && editingTodoId) {
      //we have to manipulate one targeted todo by object sprreading!!
      const updatedTodo = todo.map((item) =>
        item.id == editingTodoId ? { ...item, title, content } : item
      );
      setTodo(updatedTodo);
      setContent('');
      setTitle('');
      setIsEditing(false);
    } else {
      setTodo([
        ...todo,
        {
          id: Date.now().toString(),
          user: username,
          title: title,
          content: content,
        },
      ]);

      setContent('');
      setTitle('');
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedTodo = todo.filter((todo) => todo.id != id);
    setTodo(updatedTodo);
  };

  const handleEdit = (todo) => {
    setTitle(todo.title);
    setContent(todo.content);
    setEditingTodoId(todo.id);
    setIsEditing(true);
  };

  return (
    <>
      <div className='dashboardcontainer'>
        <div className='addtodo'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            value={title}
            onChange={handleTitleChange}
            type='text'
          />
          <label htmlFor='content'>Content</label>
          <input
            id='content'
            value={content}
            onChange={handleContentChange}
            type='text'
          />
          <button onClick={handleAdd}>{isEditing ? 'Update' : 'Add'}</button>
        </div>
        {todo.length == 0 && <h1>Add todo to view !</h1>}
        {todo.map((todo) => (
          <div key={todo.id} className='todolist'>
            <p>{todo.content}</p>
            <button onClick={() => handleEdit(todo)}>Edit Note</button>
            <button onClick={() => handleDelete(todo.id)}>Delete Note </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
