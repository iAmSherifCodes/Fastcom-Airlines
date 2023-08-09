import React, { useState } from "react";
import { createAirlineEnquiryUrl } from "../../api/Api";
import axios from "axios";

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
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Type</label>
          <input
            type="text"
            name="type"
            value={data.type}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AirlineEquiry;