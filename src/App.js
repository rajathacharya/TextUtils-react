import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
       <Navbar title="TextUtils" about="About" /> {/*props ------>  title="TextUtils" about="AboutUs" */}
      {/*props ------>  title="TextUtils" about="AboutUs" */}
      <div className="container">
        <TextForm heading="Enter the text below"/>
      </div>
    </>
  );
}

export default App;
