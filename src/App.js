import './App.css';
import Navbar from './Component/Navbar';
import ModifyText from './Component/ModifyText';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import { BrowserRouter as Router,
  } from 'react-router-dom';

 
function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const changetheme = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextChanger" mode={mode} Changetheme={changetheme} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <ModifyText showAlert={showAlert} heading="TextChanger - Word counter , Character counter ,Remove Extra spaces " mode={mode}/>
    </div>
    </Router>
    </> 
  );
}

export default App;