import React, {useState} from 'react'
import './App.css';
import Nav  from './components/Nav'
import Home  from './components/content/Home'
import Settings  from './components/content/Settings'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [location, setLocation] = useState('home')

  function setLoc(e){
   setLocation(e)
  }
  return (
    <div className="App">
        <Nav setLoc = {(e) => setLoc(e)}></Nav>
        <div className="contentArea">
            {location === 'home' ? 
            <Home></Home>
            :
            <Settings></Settings>
          }
        </div>
    </div>
  );
}

export default App;
