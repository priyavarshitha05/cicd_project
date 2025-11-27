import React from 'react';
import './UserData.css';

class UserData extends React.Component {
  render() {
    // Manually defined user data array
    const users = [
      { fullName: 'Anu', email: 'anu@gmail.com', password: '2222' },
      { fullName: 'Anjula', email: 'anjula@gmail.com', password: '1111' },
      { fullName: 'Sree', email: 'sree@gmail.com', password: '3333' },
      { fullName: 'Hema', email: 'hema@gmail.com', password: '2222' },
    ];

    return (
      <div className="user-dashboard">
        <h2>User Dashboard</h2>
        <div className="user-list">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <p><strong>Full Name:</strong> {user.fullName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Password:</strong> {user.password}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserData;
