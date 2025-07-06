import React, { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //make api call here , if success redirect to dashboard or show error!
  };
  return (
    <>
      <div className='container'>
        <div className='title'>
          <h1>Mark It</h1>
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
