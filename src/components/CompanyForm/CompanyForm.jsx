import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './CompanyForm.module.css'
import * as companyService from '../../services/companyService'

const CompanyForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    description: '',
    size: '',
    location: '',
    // need to pass in profile id in as admin info via hidden value
    admin: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // need to update handleSubmit to submit to the right model/backend call
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await companyService.create(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { companyName, description, size, location } = formData

  const isFormInvalid = () => {
    return !(companyName && description && size && location)
  }

  return (
    <div className='flex justify-center w-5/5'>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='max-w-4l'
      >
        <div className="form-control mt-5">
          <label htmlFor="name" className='label-text'>Company Name</label>
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
          <label htmlFor="description" className="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            type="text"
            autoComplete="off"
            id="description"
            value={description}
            name="description"
            onChange={handleChange}
            className="textarea h-24 textarea-bordered"
            placeholder="Description"
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
        <div>
          <input name="admin" hidden value="" />
          {/* pass in profile id here */}
        </div>
        <div className='mt-7 mb-10 flex justify-center'>
          <button disabled={isFormInvalid()} className='btn mx-2'>
            Sign Up
          </button>
          <Link to="/">
            <button className='btn mx-2'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default CompanyForm
