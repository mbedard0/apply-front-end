import React, { useState, useEffect } from 'react';
import JobForm from '../../components/JobForm/JobForm'
import * as profileService from '../../services/profileService'


const JobCreate = (props) => {
   const profile = props.profile
   const [company, setCompany] = useState()
   const [adminCompanies, setAdminCompanies] = useState()
   // need to render a form
   // the form isn't available if the profile is an individual (profile.type === 'individual')
   // for users that are registered as companies: 1. need to get the names of companies from their profiles via a backend call. put that information into a select/dropdown for which company they are posting a job for


   // useEffect(() => {
   //    if (profile && profile.status === 'company') {
   //       profileService.getCompany(profile.company[0])
   //          .then(company => {
   //             setCompany(company)
   //          })
   //    }
      // else if (profile && profile.status === 'individual') {
      //    profileService.getAllCompanies(profile._id)
      //       .then(company => {
      //          setAdminCompanies(company)
      //       })
      // }
   // }, [])


   if (profile === undefined) {
      return (
         <>
            <p className="flex justify-center mt-10 text-4xl">loading</p>
         </>
      )
   } else {
      if (profile.status === 'company') {
         return (
            <>
               <h1 className="flex justify-center mt-10 text-4xl">list the companies this admin is a part of....</h1>
               <main>
                  <div>
                     <h1 className="flex justify-center">Job Create Page element below</h1>
                  </div>
                  <JobForm {...props} />
               </main>

            </>
         )
      } else if (profile.status === 'individual') {
         return (
            <>
               <main>
                  <div className="flex justify-center">
                     <div className="mt-10">You must be registered as a representative of a company to access this page.</div>
                  </div>
               </main>
            </>
         )
      }
   }
}

export default JobCreate;