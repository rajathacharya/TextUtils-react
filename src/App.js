import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => { 
    if(mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#3a3c3f'
    }else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }

  }

  return (
    <>
       <Navbar title="TextUtils" about="About" Dark="Dark" mode={mode}  toggleMode={toggleMode} /> {/*props ------>  title="TextUtils" about="AboutUs" */}
      {/*props ------>  title="TextUtils" about="AboutUs" */}
      <div className="container">
        <TextForm heading="Enter the text below" textcolor={mode} mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
