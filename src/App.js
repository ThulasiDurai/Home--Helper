import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/Components/loginsign/Login.js';
import Signup from '../src/Components/loginsign/Signup.js';
import Main from './Components/Main.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import YourComponent from './Components/Main.js';
import Home from './Components/Home.js';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/Signup" element={<Signup></Signup>} ></Route>
      </Routes>
      </BrowserRouter>  
      {/* <Main/> */}
      {/* <Header/>
      <Footer/>
      {/* <YourComponent/> */}
    </div>
  );
}

export default App;