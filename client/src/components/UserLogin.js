import React, { useState } from 'react';
import { CommentOutlined } from '@ant-design/icons';
import _ from 'lodash';

const button = {
  width: '20%',
  height: 50,
  fontWeight: 'bold', 
  borderRadius: 30,
  fontSize: 20,
  backgroundColor: '#15a4fa',
  borderWidth: 0,
  color: '#fff',
  margin: 10,
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.2s ease-in-out'
};

const inputStyle = {
  margin: 10, 
  height: 60, 
  width: '50%', 
  borderRadius: 30, 
  fontSize: 25, 
  paddingInline: 20,
  border: '2px solid #15a4fa',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)'
};

const container = {
  backgroundColor: '#f4f4f4',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
};

const header = {
  margin: '20px auto',
  display: 'flex',
  alignItems: 'center'
};

const title = {
  fontSize: 50,
  fontWeight: 'bold',
  color: '#15a4fa',
  marginLeft: 20,
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
};

export default function UserLogin({ setUser }) {

  const [user , setAUser] = useState('');

  function handleSetUser() {
    if(!user) return;
    localStorage.setItem('user', user);
    setUser(user);
    localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1, 1000)}/200/300`);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSetUser();
    }
  }

  return (
    <div style={container}>
      <div style={header}>
        <CommentOutlined style={{ fontSize: 60, color: '#15a4fa' }} />
        <h1 style={title}>Super Chat</h1>
      </div>
      <input
        style={inputStyle}
        value={user}
        onChange={e=> setAUser(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your name"
      />
      <button
        onClick={handleSetUser}
        style={button}
      >
        Login
      </button>
    </div>
  );
}
