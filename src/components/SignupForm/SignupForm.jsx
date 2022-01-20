import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import SignupFormCompany from '../SignupFormCompany/SignupFormCompany'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const statusType = props.statusType['type']
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      if(statusType === 'individual') {
        navigate('/profile')
      } else {
        navigate('/create-company')
      }
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <>
      {statusType === 'company' ?
        <h1 className='flex justify-center mb-3'>
          Get started by creating an account.
        </h1>
        :
        ''
      }
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className=''
      >
        <div className='form-control'>
          <label htmlFor="name" className="label-text">Name</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Name"
          />
        </div>
        <div className='form-control mt-5'>
          <label htmlFor="email" className="label-text">Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Email"
          />
        </div>
        <div className="form-control mt-5">
          <label htmlFor="password" className="label-text">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Password"
          />
        </div>
        <div className="form-control mt-5">
          <label htmlFor="confirm" className="label-text">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Password confirmation"
          />
        </div>
        <div className='mt-7 mb-10 flex justify-center'>
          <button disabled={isFormInvalid()} className='btn btn-success mx-2'>
            Sign Up
          </button>
          <Link to="/">
            <button className="btn mx-2">Cancel</button>
          </Link>
        </div>
      </form>
      {statusType === 'company' ?
        <ul class="w-full steps">
          <li class="step step-primary">Register</li>
          <li class="step">Set up your company</li>
          <li class="step">Post a job</li>
        </ul>
        :
        <ul class="w-full steps">
          <li class="step step-primary">Register</li>
          <li class="step">Set up your profile</li>
          <li class="step">Start applying!</li>
        </ul>
      }
    </>
  )
}

export default SignupForm
