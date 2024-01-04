// import { Link } from 'react-router-dom';
// import React from 'react';
// import './Login.css';
// import TextField from '@mui/material/TextField';

// function Login() {
//   return (
//     <div className="App">
//       <form action="">
//         <h3 id='log' >LOGIN</h3>
//         <br></br>
//         <div className="input-box">
//           <TextField id="standard-basic" label="Username" variant="standard" required/>
//         </div>
//         <br></br>
//         <div className="input-box">
//           <TextField id="standard-basic" label="Password" variant="standard" required/>
//         </div>
//         <br></br>
//         <Link to='/'><button type="submit">Login</button></Link>
//         <div className="register">
//         <p>Don't have an account ? <a href="#"><Link to="/Signup"> Sign Up</Link></a></p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission logic (replace with your actual logic)
    console.log('Form submitted with data:', formData);

    // Reset the form after submission (if needed)
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className='body'>
      <div className="App">
      <form onSubmit={handleSubmit}>
        <h3 id='log'>LOGIN</h3>
        <br></br>
        <div className="input-box">
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div className="input-box">
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        {/* <button type="submit">Login</button> */}
        <Link to='/'><button type="submit">Login</button></Link>
        <div className="register">
          <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
