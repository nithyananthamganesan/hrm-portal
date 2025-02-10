import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Signin from './pages/Signin'
import MainProfile from './profile/MainProfile'
import Header from './pages/Layout/Header'
import Sidebar from './pages/Layout/Sidebar'
import Dashboard from './pages/Dashboard'
import "./pages/Layout/layout.css"
import Attendance from './pages/Attendance'
import { useEffect, useState } from 'react'

function App() {
  // const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(()=> {
    const storedUser = localStorage.getItem('isLoggedIn');
    const loginTime = localStorage.getItem('loginTimeStamp')
    if(storedUser === 'true' && loginTime) {
      const currentTime = Date.now();
      const timeDifference = currentTime - parseInt(loginTime);

      if(timeDifference >= 24*60*60*10000){
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginTimeStamp');
        navigate('/')
      } else {
        navigate('/dashboard')
      }
      
    } else {
      navigate('/')
    }
  },[])

  const handleSignIn = (companyId, password, rememberMe) => {
    if(companyId === 'admin' && password === 'admin'){
        setError('');
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('loginTimeStamp',Date.now().toString());
        if(rememberMe){
          localStorage.setItem('companyId', companyId);
        } else {
          localStorage.removeItem('companyId');
        }
        navigate('/');
    } else {
      setError("Invalid companyid or password")
    }
  }

  const handleSignout = () => {
    localStorage.removeItem('companyId');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTimeStamp');
  }

  // const PrivateRoute = ({element}) => {
  //     (loggedIn === 'true') ? element : <Navigate to='/' replace />
  // }
  return (
    
        <Routes>
          <Route path='/' element={<Signin handleSignIn={handleSignIn} error={error} />} />
          <Route path="/*" element={<MainProfile handleSignout={handleSignout}/>} />
        </Routes>
    
  )
}

export default App
