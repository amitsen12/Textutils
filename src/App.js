import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import Aboutus from "./components/Aboutus";
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
function App() {
  
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  },1500);
  }
  const togglechng = ()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("dark mode has been enabled","sucess");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","sucess");
    }
  }
  return (
   <>
   <Navbar title="MyTextUtils"  mode = {mode} togglechng = {togglechng}/>
   <Alert alert={alert}/>
   <BrowserRouter>
   <Routes>
   <Route path ="/" element={ <div className="container">
     <Textform heading="Enter The Text To Analyze Below" mode = {mode} showAlert={showAlert}/> 
     
   </div>}/>
   <Route path ="/aboutus" element={<Aboutus/>}/>
   </Routes>
   </BrowserRouter>
  
   
   </>
  );
}

export default App;
