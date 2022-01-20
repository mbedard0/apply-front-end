import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import UserProfile from './pages/UserProfile/UserProfile'
// import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import CreateCompany from './pages/CreateCompany/CreateCompany'
import * as authService from './services/authService'
import { createCompany } from './services/companyService'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [companies, setCompanies] = ([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddCompany = formData => {
    createCompany(formData)
    .then(newCompanyData => {
      setCompanies([...companies, newCompanyData])
    })
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/profile"
          element={user ? <UserProfile user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route 
          path='/createCompany'
          element={user ? <CreateCompany handleAddCompany={handleAddCompany}/> : <Navigate to='/createCompany'/>}
        />
      </Routes>
    </>
  )
}

export default App