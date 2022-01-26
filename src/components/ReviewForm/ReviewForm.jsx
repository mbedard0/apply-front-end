import { useNavigate, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';

const Review = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    jobTitle: '',
    salary: '',
    content: '',
    rating: '',
    company: '',
    length: '',
    stillEmployed: true,
    author: props.profile._id
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckbox = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({
      [e.target.name]: value
    });
  }


  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddReview(formData)
      navigate('/companies')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { jobTitle, salary, content, rating, length, stillEmployed } = formData

  const isFormInvalid = () => {
    return !(content && rating && length)
  }

  return (
    <>
      {/* {console.log(formData)} */}
      <div className="flex justify-center mt-10">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className='max-w-4l'
        >
          <h1>Write your review</h1>
          <div className='form-control mt-5'>
            <label htmlFor="jobTitle" className="label">
              <span class="label-text">Job Title</span>
            </label>
            <input
              type="text"
              autoComplete="off"
              id="jobTitle"
              value={jobTitle}
              name="jobTitle"
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Job Title"
            />
          </div>
          <div className='form-control mt-5'>
            <label htmlFor="description" className="label">
              <span class="label-text">Review</span>
            </label>
            <textarea
              type="text"
              autoComplete="off"
              id="description"
              value={content}
              name="description"
              onChange={handleChange}
              className="textarea h-24 textarea-bordered"
              placeholder="Description"
            />
          </div>
          <div className="form-control mt-5">
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Are you still employed here?</span>
                <input
                  checked={stillEmployed}
                  name='stillEmployed'
                  onChange={handleCheckbox}
                  type="checkbox"
                  class="checkbox"
                />
              </label>
            </div>
          </div>
          <div className="form-control mt-5">
            <label htmlFor="length" className="mb-2">How long have you worked here?</label>
            <select
              onChange={handleChange}
              name='length'
              class="select select-bordered w-full max-w-xs"
            >
              <option disabled="disabled" selected="selected">
                -- Select --
              </option>
              <option
                name="length"
                value='Less than a year'
              >
                Less than a year
              </option>
              <option
                name="length"
                value='1-3 years'
              >
                1-3 years
              </option>
              <option
                name="length"
                value='3-5 years'
              >
                3-5 years
              </option>
              <option
                name="length"
                value='5-10 years'
              >
                5-10 years
              </option>
              <option
                name="length"
                value='10+ years'
              >
                10+ years
              </option>
            </select>
          </div>
          <div className="form-control mt-5">
            <label htmlFor="location" className="label-text">Rating</label>
            <input
              type="location"
              autoComplete="off"
              id="location"
              value={rating}
              name="location"
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Location"
            />
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
    </>
  );
}

export default Review;