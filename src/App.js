import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
       <Navbar title="TextUtils" about="About" Dark="Dark" /> {/*props ------>  title="TextUtils" about="AboutUs" */}
      {/*props ------>  title="TextUtils" about="AboutUs" */}
      <div className="container">
        {/* <TextForm heading="Enter the text below"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
