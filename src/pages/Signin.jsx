import React from 'react'
import LoginForm from '../components/Signin/LoginForm'
import LoginImage from '../components/Signin/LoginImage'
import "../components/Signin/signin.css"

const Signin = ({handleSignIn, error}) => {
  return (
    <div className='signin-section'>
      <LoginForm handleSignIn={handleSignIn} error={error}/>
      <LoginImage />
    </div>
  )
}

export default Signin
