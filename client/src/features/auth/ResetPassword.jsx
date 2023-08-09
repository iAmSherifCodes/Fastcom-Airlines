// import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();

    console.log('token --> ', token)

  return (
    <div>
        <h1>Reset Password</h1>
        <p>Token: {token}</p>
    </div>
  )
}

export default ResetPassword
