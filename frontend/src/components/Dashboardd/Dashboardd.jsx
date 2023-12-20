import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboardd = () => {

  const linkStyle = {
    backgroundColor: 'blue',
    fontWeight: 'bold',
    color: 'white',
    padding: '10px', 
    textDecoration: 'none',
    borderRadius: '4px',
    display: 'block',
  };

  const listItem = {
    marginTop:'100px',
    marginBottom: '30px', 
    marginLeft:'50px',
  };

  return (
    <div>
      <ul>
        <li style={listItem}>
          <Link to='create-user' style={linkStyle}>
            Create a User
          </Link>
        </li>
        <li style={listItem}>
          <Link to='all-users' style={linkStyle}>
            All Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboardd;
