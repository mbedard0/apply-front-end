import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
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
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      {/* <h1>Individual Signup</h1> */}
      <div className='form-control mt-5'>
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
      <div className='mt-5'>
        <button disabled={isFormInvalid()} className='btn btn-success'>
          Sign Up
        </button>
        <Link to="/">
          <button className="btn">Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
