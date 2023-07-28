
import React,{ useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/alert';



function App() {

const [mode, setmode]=useState('light');
const [alert, setalert]=useState(null);

const showalert=(message,type)=>{
  setalert(
    {
      msg:message,
      type:type

    }
  )
  setTimeout(()=>{
setalert(null);
  },2000);
}

 const togglemode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='black';
    showalert("dark mode has been enabled","success")
   // setInterval(()=>{
     // document.title='install Textutils now';
    //},2000);
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert("light mode has been enabled","success")
  }

}

  return (
  <>
  <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  
  <div className='container'>
  {/* <About mode={mode}/>*/}
  <Textform showalert={showalert} heading="Enter your text here" mode={mode}/>
    </div>
  </>
  );
}

export default App;
