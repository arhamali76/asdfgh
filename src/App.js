import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
const toggleMode = () =>
{
if(mode ==='dark')
{
  setMode ('light');
  document.body.style.backgroundColor = 'white';
}
else
{
  setMode ('dark');
  document.body.style.backgroundColor = '#1a3d5c';
}
}
  return (
 <>
 <Navbar title='Arham' mode={mode} toggleMode={toggleMode}/>
 <Textform label='Enter the text below to analyze' mode={mode} toggleMode={toggleMode}/>
 </>
  );
}

export default App;
