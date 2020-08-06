import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';

// COMPONENTS
import HomeComponent from './components/Home';
import ProfileComponent from './components/Profile';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/" exact="true">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <Route path="/" exact component={HomeComponent}></Route>
        <Route path="/profile" exact component={ProfileComponent}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
