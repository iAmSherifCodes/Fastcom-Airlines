import React, { useState } from 'react';
import { forgotPassUrl } from '../../api/Api';
import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(forgotPassUrl(email));
      console.log('Forgot pass data --> ', response.data);
    } catch (error) {
      console.error('Forgot pass error --> ', error.response.data);

    }
  }

  return (
    <div className='forgotPass' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40rem' }}>
      <label htmlFor="email">Email: 
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={handleSubmit} type="submit">Send</button>
    </div>
  )
}

export default ForgotPassword
