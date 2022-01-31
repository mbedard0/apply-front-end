import { useNavigate, Link, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';

const Review = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    jobTitle: '',
    salary: '',
    content: '',
    rating: '5',
    company: location.state._id,
    length: 'Less than a year',
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
      ...formData,
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

  // const handleNumChange = e => {
  //   // if it checks as a number, change it and return true
  //   // else return false
  //   // conditional rendering below, if returns false display message ('please enter a valid number')
  //   let num = parseInt(e)
  //   if (isNaN(num)) {
  //     return false
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     })
  //   }
  // }

  const { jobTitle, salary, content, rating, length, stillEmployed } = formData

  const isFormInvalid = () => {
    return !(jobTitle && content && rating && length)
  }

  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className='max-w-4l'
        >
          <h1>Write your review for {location.state.companyName}</h1>
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
              id="content"
              value={content}
              name="content"
              onChange={handleChange}
              className="textarea h-24 textarea-bordered"
              placeholder="Description"
            />
          </div>
          <div className='form-control mt-5'>
            <label htmlFor="salary" className="label">
              <span class="label-text">Salary</span>
            </label>
            <label class="input-group input-group-md">
              <input
                type="text"
                autoComplete="off"
                id="salary"
                value={salary}
                name="salary"
                onChange={handleChange}
                className="input input-bordered input-md"
                placeholder="$"
              />
              <span>yearly</span>
            </label>
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
              value={length}
              class="select select-bordered w-full max-w-xs"
            >
              <option 
                disabled="disabled" 
              >
                -- Select --
              </option>
              <option
                selected="selected"
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
            <div class="rating">
              <input type="radio" name='rating' class="mask mask-star-2 bg-warning" value='1' onChange={handleChange}/>
              <input type="radio" name='rating' class="mask mask-star-2 bg-warning" value='2' onChange={handleChange}/>
              <input type="radio" name='rating' class="mask mask-star-2 bg-warning" value='3' onChange={handleChange} />
              <input type="radio" name='rating' class="mask mask-star-2 bg-warning" value='4' onChange={handleChange}/>
              <input type="radio" name='rating' class="mask mask-star-2 bg-warning" value='5' onChange={handleChange} />
            </div>

          </div>
          {/* 
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
           */}
          <div className='mt-7 mb-10 flex justify-center'>
            <button disabled={isFormInvalid()} className='btn mx-2'>
              Submit
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