import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';


function App() {
  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);


  const setAlert = (message, type) => {
        setalert({
          msg: message,
          type: type /* we can use both key and value same */
        })

        setTimeout(() => {
          setalert(null)
        }, 1000);
  }



  const toggleMode = () => { 
    if(mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      setAlert("Dark Mode has been activated", "success");
    }else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      setAlert("Light Mode has been activated", "success");
    }

  }

  return (
    <> 
      <Navbar title="TextUtils" about="About" Dark="Dark" mode={mode}  toggleMode={toggleMode} /> {/*props ------>  title="TextUtils" about="AboutUs" */}
      <Alerts alert={alert}/>
      <div className="container">
      <TextForm heading="Enter the text below" textcolor={mode} mode={mode} setAlert={setAlert}/>
      </div>
    </>
  );
}

export default App;


