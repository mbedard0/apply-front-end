import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import UserProfile from './pages/UserProfile/UserProfile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import CreateCompany from './pages/CreateCompany/CreateCompany'
import CompanyIndex from './pages/CompanyIndex/CompanyIndex'
import CompanyView from './pages/CompanyView/CompanyView'
import JobCreate from './pages/JobCreate/JobCreate'
import About from './pages/About/About'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import { createCompany } from './services/companyService'
import { createJob } from './services/jobService'
import { createReview } from './services/reviewService'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState()
  const [companies, setCompanies] = useState([])
  const [jobs, setJobs] = useState([])
  const [reviews, setReviews] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    setProfile(null)
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

  const handleAddReview = formData => {
    createReview(formData)
      .then(newReviewData => {
        setReviews([...reviews, newReviewData])
      })
  }

  useEffect(() => {
    if (user) {
      profileService.getMyProfile(user._id)
        .then(profile => {
          setProfile(profile)
        })
    } else {
      return
    }
  }, [user])

  const handleAddJob = formData => {
    createJob(formData)
      .then(newJobData => {
        setJobs([...jobs, newJobData])
      })
  }

  return (
    <>
      <NavBar profile={profile} handleLogout={handleLogout} />
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
          path='/about'
          element={<About />}
        />
        <Route
          path="/profile"
          element={user ? <UserProfile profile={profile} /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path='/create-company'
          element={user ? <CreateCompany handleAddCompany={handleAddCompany} user={user} profile={profile} /> : <Navigate to='/login' />}
        />
        <Route
          path='/companies'
          element={<CompanyIndex companies={companies} />}
        />
        <Route
          path='/company-details/:id'
          element={<CompanyView companies={companies} profile={profile} handleAddReview={handleAddReview} />}
        />
        <Route
          path='/create-job'
          element={<JobCreate handleAddJob={handleAddJob} profile={profile} />}
        />
      </Routes>
    </>
  )
}

export default App