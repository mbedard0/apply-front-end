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
        <div className='mb-5'>
          <label htmlFor="email" className='mr-5'>Email:</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="input input-bordered text-black"
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="password" className='mr-5'>Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.pw}
            name="pw"
            onChange={handleChange}
            className="input input-bordered text-black"
          />
        </div>
        <div className="flex justify-center">
          <button className='btn btn-success mx-2'>Log In</button>
          <Link to="/" className="btn btn-error mx-2">Cancel</Link>
        </div>
      </form>
    </>
  )
}

export default LoginForm
