import React, { useState } from 'react'
import { BRIEFCASE, LOCK, LOGIN_LOGO } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
// import './signin.css';

const LoginForm = ({handleSignIn, error}) => {
    const [companyId, setCompanyId]= useState("");
    const [password, setPassword] = useState("");
    
    // const handleSigninClick = (e) => {
    //     e.preventDefault();
    //     if(companyId == "admin" && password == "admin") {
    //         navigate('/dashboard')
    //     } else {
    //         setError("Signin authentication failed");
    //     }
        
    // }
return (
    <div className='login-page-left'>
        <div className="login-page-logo">
            <img src={LOGIN_LOGO} alt="login-page-logo" />
        </div>
        <div className="login-page-title">
            <p>Sign Into <span>Your Account</span></p>
        </div>
        <div className="login-form-fields">
            <form type="Submit" className='login-form'>
            {error && <span className='error-message'>{error}</span>}
                <div className="input-container">
                    <span className="input-icon"><img src={BRIEFCASE} alt="icon" /></span>
                    <input type="text" placeholder="Company ID" value={companyId}  onChange={(e)=>setCompanyId(e.target.value)}/>
                </div>
                <div className="input-container">
                    <span className="input-icon"><img src={LOCK} alt="icon" /></span>
                    <input type="password" placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                
                <div className="remember-me">
                    
                    <input type='checkbox' id='remember_me' />
                    <label htmlFor="remember_me">Remember Me</label>
                </div>
                <div className="submit-button">
                    <button type="submit" onClick={()=>handleSignIn(companyId,password)}>Sign in</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default LoginForm
