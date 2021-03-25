import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
     <header>
       <nav class="navbar">
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Services</a></li>
           <li><a href="#">Contact us</a></li>
           <div class="search">
              <input type="text" name="search" id="search" placeholder="search for movies"></input>
           </div>
         </ul>
       </nav>
     </header>
    );
  }
}

export default App;
