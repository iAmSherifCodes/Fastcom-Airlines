import React, { useState } from "react";
import { registerUrl } from "../../api/Api";
import axios from "axios";
import Styles from "./styles/SignUp.modules.css";
import { Typography, Box, TextField, Button } from "@mui/material";
import { LoginStyle } from "./styles/Styling";

const SignUp = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    userName: "",
  };

  const [data, setData] = useState(initialValue);

  const handleChange = async (e) => {
    e.preventDefault();
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };

    const response = await axios.post(registerUrl, userData);

    if (response.status === 200) {
      console.log("BC res --> ", response.data);
    }
  };

  return (
    <Box className={Styles.SignUp} sx={LoginStyle.LoginMainStyle}>
      <Typography sx={LoginStyle.WelcText}>Register</Typography>
      <form classNAme={Styles.SignUpForm} onSubmit={handleSubmit}>
        <div>
          <TextField
            sx={LoginStyle.InputStyles}
            value={data.firstName}
            name="firstName"
            onChange={handleChange}
            type="text"
            varient="outlined"
            label="First Name"
          />
        </div>
        <div>
          <TextField
            sx={LoginStyle.InputStyles}
            value={data.lastName}
            name="lastName"
            onChange={handleChange}
            type="text"
            varient="outlined"
            label="Last Name"
          />
        </div>
        <div>
          <TextField
            sx={LoginStyle.InputStyles}
            value={data.email}
            name="email"
            onChange={handleChange}
            type="email"
            varient="outlined"
            label="Email"
          />
        </div>
        <div>
          <TextField
            sx={LoginStyle.InputStyles}
            value={data.userName}
            name="userName"
            onChange={handleChange}
            type="text"
            varient="outlined"
            label="Username"
          />
        </div>
        <div>
          <TextField
            sx={LoginStyle.InputStyles}
            value={data.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            type="tel"
            varient="outlined"
            label="Phone Number"
          />
        </div>
        <div>
          <TextField
            sx={LoginStyle.InputStyles}
            value={data.password}
            name="password"
            onChange={handleChange}
            type="tel"
            variant="outlined"
            label="Password"
          />
        </div>
        <div>
          <Button variant="contained" sx={LoginStyle.ButtonStyles} type="submit">Submit</Button>
        </div>
      </form>
    </Box>
  );
};

export default SignUp;
