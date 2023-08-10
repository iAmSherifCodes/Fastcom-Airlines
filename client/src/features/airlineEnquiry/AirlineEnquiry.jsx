import React, { useState } from "react";
import { createAirlineEnquiryUrl } from "../../api/Api";
import axios from "axios";
import { LoginStyle } from "../auth/styles/Styling";
import { TextField, Box, Typography, Button } from "@mui/material";

const AirlineEquiry = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    type: "",
  });

  const changeHandler = async (e) => {
    e.preventDefault();
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const details = {
      title: data.title,
      description: data.description,
      type: data.type,
    };

    const response = await axios.post(createAirlineEnquiryUrl, details);

    if (response.status === 200) {
      console.log("BC res --> ", response.data);
    }
  };

  return (
    <Box sx={LoginStyle.LoginMainStyle}>
      <Box>
        <Typography sx={LoginStyle.WelcText}>
          Fastcom Airline Enquiry
        </Typography>
      </Box>
      <Box component="form" action="" onSubmit={submitHandler} sx={LoginStyle.FormStyle}>
        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="outlined-basic"
            type="text"
            label="Title"
            name="title"
            variant="outlined"
            value={data.title}
            onChange={changeHandler}
          />
        </Box>
        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="outlined-basic"
            placeholder="Placeholder"
            label="Type"
            variant="outlined"
            type="text"
            name="type"
            value={data.type}
            onChange={changeHandler}
          />
        </Box>
        <Box sx={LoginStyle.InputStyles}>
          <TextField
            sx={LoginStyle.TextFieldStyles}
            id="outlined-multiline-static"
            label="Description"
            multiline
            type="text"
            name="description"
            value={data.description}
            onChange={changeHandler}
          />
        </Box>

        <Button sx={LoginStyle.ButtonStyles} variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AirlineEquiry;
