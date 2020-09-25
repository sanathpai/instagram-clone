import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" alt="" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>
      <Post username="sanathpai99" caption="what a frikkin idiot!" imageUrl="https://images.unsplash.com/photo-1596650956793-68f12df4e549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
      <Post username="anushamlvalli" caption="hahaha!" imageUrl="https://images.unsplash.com/photo-1600115010857-edbbc7e1efb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
    </div>
  );
}

export default App;
