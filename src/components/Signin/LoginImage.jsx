import React from 'react'
// import "./signin.css"
import { LOGIN_POSTER } from '../../utils/constants'

const LoginImage = () => {
  return (
    <div className='login-page-right'>
      <div className="login-page-poster">
        <img src={LOGIN_POSTER} alt="login-page-poster" />
      </div>
    </div>
  )
}

export default LoginImage
