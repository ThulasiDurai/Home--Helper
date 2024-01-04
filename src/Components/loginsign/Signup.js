import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Signup = () =>  {
  return (
    <div className='body' >
          <div className="App">
      {/* <img src='https://img.pikbest.com/backgrounds/20190617/simple-cleaning-service-hd-background_1895772.jpg!sw800' className='signimg'></img> */}
      <form action="">
        <h3 id='log'>Sign Up</h3>
        <br></br>
        <div className="input-box">
        <TextField id="standard-basic" label="First Name" variant="standard" />
        </div>
        <br></br>
        <div className="input-box">
        <TextField id="standard-basic" label="Last Name" variant="standard" />
        </div>
        <br></br>
        {/* <div className="input-box">
        <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
        </div>
        <br></br> */}
        <div className="input-box">
          <TextField id="standard-basic" label="Email" variant="standard" type="email"/>
        </div>
        <br></br>
        <div className="input-box">
          <TextField id="standard-basic" label="Password" variant="standard" />
        </div>
        <br></br>
        <Link to='/'><button type="submit">Sign Up</button></Link>
        <div className="register">
          <p>Already have an account ? <a href="#"><Link to ="/login">Log In</Link></a></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;

