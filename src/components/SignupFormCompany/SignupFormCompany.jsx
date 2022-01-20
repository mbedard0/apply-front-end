import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupFormCompany.module.css'
import * as authService from '../../services/authService'

// will refactor this form to the create a company page

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    size: '',
    location: '',
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

  const { companyName, email, size, location, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(companyName && email && size && location && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className='form-control mt-5'>Company Name</label>
        <input
          type="text"
          autoComplete="off"
          id="companyName"
          value={companyName}
          name="companyName"
          onChange={handleChange}
          className="input input-bordered"
          placeholder="Company Name"
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
        <label htmlFor="size">Company Size</label>
        <select
          onChange={handleChange}
          name='size'
          class="select select-bordered w-full max-w-xs"
        >
          <option disabled="disabled" selected="selected">
            Choose your company's size
          </option> 
          <option
            selected
            name="size"
            value='1-10'
          >
            1-10
          </option>
          <option
            name="size"
            value='11-50'
          >
            11-50
          </option>
          <option
            name="size"
            value='51-200'
          >
            51-200
          </option>
          <option
            name="size"
            value='201-1000'
          >
            201-1,000
          </option>
          <option
            name="size"
            value='1001-5000'
          >
            1,001-5,000
          </option>
          <option
            name="size"
            value='5001-10000'
          >
            5,001-10,000
          </option>
          <option
            name="size"
            value='10001+'
          >
            10,001+
          </option>
        </select>
      </div>
      <div className="form-control mt-5">
        <label htmlFor="location" className="label-text">Location</label>
        <input
          type="location"
          autoComplete="off"
          id="location"
          value={location}
          name="location"
          onChange={handleChange}
          className="input input-bordered"
          placeholder="Location"
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
        <button disabled={isFormInvalid()} className='btn'>
          Sign Up
        </button>
        <Link to="/">
          <button className='btn'>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
