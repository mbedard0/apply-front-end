import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const JobForm = (props) => {
   const navigate = useNavigate()
   const [formData, setFormData] = useState({
      // trying to load props breaks this
      // company: props.company._id,
      jobTitle: '',
      description: '',
      salary: '',
      employmentType: '',
      categories: '',
   })

   // const handleChange = e => {
   //    setFormData({
   //       ...formData,
   //       [e.target.name]: e.target.value,
   //    })
   // }

   // **** the handleAddJob and backend call here is broken, which was causing the page to crash ****
   // const handleSubmit = async e => {
   //    e.preventDefault()
   //    try {
   //       props.handleAddJob(formData)
   //       // change this to job details!!!
   //       navigate('/companies')
   //    } catch (err) {
   //       props.updateMessage(err.message)
   //    }
   // }

   const { jobTitle, description, salary } = formData


   const isFormInvalid = () => {
      return !(jobTitle && description && salary)
   }

   if (props === undefined) {
      return (
         <>
         </>
      )
   } else {
      return (
         <>
            <main>
               form goes here
               {/* <h1 className="flex justify-center">Job Form Element</h1>
            <form
               autoComplete="off"
               //   onSubmit={handleSubmit}
               className='max-w-4l'
            >
               <div className="form-control mt-5">
                  <label htmlFor="name" className='label-text'>Company Name</label>
                  <input
                     type="text"
                     autoComplete="off"
                     id="companyName"
                     // value={companyName}
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
                     // value={description}
                     name="description"
                     onChange={handleChange}
                     className="textarea h-24 textarea-bordered"
                     placeholder="Description"
                  />
               </div>
               <div className="form-control mt-5">
                  <label htmlFor="location" className="label-text">Location</label>
                  <input
                     type="location"
                     autoComplete="off"
                     id="location"
                     // value={location}
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
            </form> */}
            </main>
         </>
      )
   }
   ;
}

export default JobForm;