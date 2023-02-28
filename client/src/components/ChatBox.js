import React from 'react'
import {Avatar, Image} from 'antd'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: 10
}

const messageStyle = {
  padding: '10px 15px',
  borderRadius: 10,
  backgroundColor: '#dcf8c6',
  color: '#333',
  maxWidth: '60%'
}

const senderContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: 10
}

const senderMessageStyle = {
  padding: '10px 15px',
  borderRadius: 10,
  backgroundColor: '#fff',
  color: '#333',
  maxWidth: '60%'
}

export default function ChatBoxReciever({avatar , user, message}) {
  return (
    <div style={containerStyle}>
      <Avatar
        size={50}
        src={<Image
          src={avatar}
          style={{
            objectFit: 'cover',
            width: 45,
            height: 45,
            borderRadius: '100%'
          }}
          preview={false}
        />}
      />
      <p style={messageStyle}>
        <strong style={{fontSize: 13}}>
          {user}
        </strong> <br/>
        {message}
      </p>
    </div>
  )
}

export function ChatBoxSender({avatar , user, message}) {
  return (
    <div style={senderContainerStyle}>
      <p style={senderMessageStyle}>
        <strong style={{fontSize: 13}}>
          {user}
        </strong> <br/>
        {message}
      </p>
      <Avatar
        size={50}
        src={<Image
          src={avatar}
          style={{
            objectFit: 'cover',
            width: 45,
            height: 45,
            borderRadius: '100%'
          }}
          preview={false}
        />}
      />
    </div>
  )
}
