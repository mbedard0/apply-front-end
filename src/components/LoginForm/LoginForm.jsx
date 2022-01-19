import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className='form-control'>
          <label htmlFor="email" className="label-text">Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Email"  
          />
        </div>
        <div className='form-control mt-5'>
          <label htmlFor="password" className="label-text">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
            className="input input-bordered"
            placeholder="Name"          />
        </div>
        <div className="flex justify-center mt-5">
          <button className='btn btn-success mx-2'>Log In</button>
          <Link to="/" className="btn mx-2">Cancel</Link>
        </div>
      </form>
    </>
  )
}

export default LoginForm
