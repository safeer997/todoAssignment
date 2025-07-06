import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //make api call here , if success redirect to dashboard or show error!
    navigate(`/dashboard/:${userName}`); //using url params to send username to send username .
  };
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Todo App</h1>
        </div>
        <div className='formcontainer'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input onChange={handleChange} type='text' id='username' />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
