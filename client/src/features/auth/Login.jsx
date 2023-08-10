import React, { useState } from "react";
import { loginUrl } from "../../api/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Typography, Box, Button } from "@mui/material";
import { LoginStyle }  from './styles/Styling'

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
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
      email: data.email,
      password: data.password,
    };

    const response = await axios.post(loginUrl, userData);
    console.log("BC res 1--> ", response);
    if (response.status === 200) {
      console.log("BC res --> ", response.data);
    }
  };

  const handleNavigate = () => {
    navigate("/forgot-password", { state: { email: data.email } });
  };

  return (
    <Box sx={LoginStyle.LoginMainStyle}>
      <Box>
        <Typography sx={LoginStyle.WelcText}>
          {" "}
          Welcome back{" "}
          <Box component="span" sx={LoginStyle.SpanStyles}>
            {" "}
            --Sherif--
          </Box>
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={LoginStyle.FormStyle}>
        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="email"
            label="Email"
            variant="outlined"
            value={data.email}
            name="email"
            onChange={handleChange}
            type="email"
          />
        
        </Box>
        <Box sx={LoginStyle.InputStyles}>
          <TextField
          sx={LoginStyle.TextFieldStyles}
            id="outlined-basic"
            label="Password"
            value={data.password}
            name="password"
            onChange={handleChange}
            type="password"
            variant="outlined"
          />
        </Box>
        <Box >
          <Button
            sx={LoginStyle.ButtonStyles}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Typography sx={LoginStyle.FrgtPass} onClick={handleNavigate}>
        Forgot Password?
      </Typography>
    </Box>
  );
};

export default Login;
