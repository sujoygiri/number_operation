import React, { useState } from "react";
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import NumberNButton from './components/NumberNButton';

function App() {
  const [alert, setAlert] = useState(null);
  const [disable, setDisable] = useState(null);
  const showAlert = (message) =>{
    setAlert({
      message:message
    })
    setDisable('disabled')
    setTimeout(() => {
      setAlert(null);
      setDisable(null)
    }, 3000);
  }
  return (
    <>
    <Navbar/>
    <NumberNButton showAlert={showAlert} disable={disable}/>
    <Alerts alert={alert}/>
    </>
  );
}

export default App;
