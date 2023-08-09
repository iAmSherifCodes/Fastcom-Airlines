import React, { useState } from "react";
import { registerAdminUrl } from "../../api/Api";
import axios from "axios";
import { Typography, Box, TextField, Button } from "@mui/material";
import { LoginStyle } from "./styles/Styling";

const AdminSignUp = () => {
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

    const response = await axios.post(registerAdminUrl, userData);

    if (response.status === 200) {
      console.log("BC res --> ", response.data);
    }
  };

  return (
    <Box sx={LoginStyle.AdminMainStyle}>
      <Box>
        <Typography sx={LoginStyle.WelcText}>Admin Register</Typography>
      </Box>
      <Box component="form" sx={LoginStyle.FormStyle} onSubmit={handleSubmit}>
        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="filled-basic"
            label="First Name"
            variant="filled"
            value={data.firstName}
            name="firstName"
            onChange={handleChange}
            type="text"
          />
        </Box>

        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="filled-basic"
            label="Last Name"
            variant="filled"
            value={data.lastName}
            name="lastName"
            onChange={handleChange}
            type="text"
          />
        </Box>

        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="filled-basic"
            label="Email"
            variant="filled"
            value={data.email}
            name="email"
            onChange={handleChange}
            type="text"
          />
        </Box>

        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="filled-basic"
            label="Username"
            variant="filled"
            value={data.userName}
            name="userName"
            onChange={handleChange}
            type="text"
          />
        </Box>

        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            label="Phone Number"
            variant="filled"
            value={data.phoneNumber}
            name="phoneNumber"
            id="filled-basic"
            onChange={handleChange}
            type="tel"
          />
        </Box>
        <Box sx={LoginStyle.InputStyles}>
          <TextField
            value={data.password}
            name="password"
            onChange={handleChange}
            type="password"
            label="Password"
            id="filled-basic"
            variant="filled"
            sx={LoginStyle.TextFieldStyles}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Button
            sx={LoginStyle.AdminButtonStyles}
            variant="outlined"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSignUp;
