import React from 'react';
import profile_photo from './img/my_photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React-App</h1>
      <h2>Author: Vladimir Volovenko</h2>
      <img src={profile_photo} alt="profile-image" / >
    </div>
  );
}

export default App;
