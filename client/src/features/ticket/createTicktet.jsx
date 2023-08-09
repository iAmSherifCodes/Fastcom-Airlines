import React, { useState } from 'react';
import { Countries } from '../../typings/countries';
import axios from 'axios'
import { createTicketUrl } from '../../api/Api';

const CreateTicktet = () => {
    const initialValue = {
        date: '',
        time: '',
        description: '',
        from: '',
        destination: ''
    }

    const [data, setData] = useState(initialValue)

    const handleChange = (e) => {
        setData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('data --> ', data)

        const formData = {
            ...data,
            date: data.date.toString(),
            time: data.time.toString()
        }
        await axios.post(createTicketUrl('64c7d332088415f5394d4f82'), formData)
        .then((response) => {
            console.log('Ticket response --> ', response.data)
        })
        .catch((error) => console.log('Ticket error --> ', error))
        // console.log('Ticket res 2 --> ', response.data)
        // if(response.status === 200){
        //     console.log('Ticket res 2 --> ', response.data)
        // }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="countries" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
            <select name="from" id="from" value={data.from} onChange={handleChange}>
                <option value="">Select Countries</option>
                {Countries.map((values, index) => (
                    <option key={index} value={values}>{values}</option>
                ))}
            </select>
            </div>
            <div>
                <select name="destination" id="destination"  value={data.destination} onChange={handleChange}>
                    <option value="">Select Countries</option>
                    {Countries.map((values, index) => (
                        <option key={index} value={values}>{values}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className="date-div">
            <div className="date">
                <label htmlFor="">Date</label>
                <input type="date" name='date'  value={data.date} onChange={handleChange} />
            </div>
            <div className="time">
                <label htmlFor="">Time</label>
                <input type="time" name="time"  value={data.time} onChange={handleChange} />
            </div>
        </div>
        <div className="textField">
            <textarea name="description" id="" cols="40" rows="20"  value={data.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default CreateTicktet
