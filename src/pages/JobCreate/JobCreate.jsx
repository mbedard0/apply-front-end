import React, { useState, useEffect } from 'react';
import JobForm from '../../components/JobForm/JobForm'
import * as profileService from '../../services/profileService'


const JobCreate = (props) => {
   const profile = props.profile
   const [company, setCompany] = useState()
   const [adminCompanies, setAdminCompanies] = useState()


   useEffect(() => {
      if (profile && profile.status === 'company') {
         profileService.getCompany(profile.company[0])
            .then(company => {
               setCompany(company)
            })
      }
      if (profile && profile.status === 'individual') {
         profileService.getAllCompanies(profile._id)
            .then(company => {
               setAdminCompanies(company)
            })
      }
   }, [])


   if (profile === undefined) {
      return (
         <>
            <p className="flex justify-center mt-10 text-4xl">loading</p>
         </>
      )
   } else {
      if (profile.status === 'individual' && adminCompanies) {
         return (
            <>
               <h1 className="flex justify-center mt-10 text-4xl">list the companies this admin is a part of....</h1>
            </>
         )
      } else if (profile.status === 'individual' && adminCompanies === undefined) {
         return (
            <>
               <main>
                  <div className="flex justify-center">
                     <div className="mt-10">You must be registered as a representative of a company to access this page.</div>
                  </div>
               </main>
            </>
         )
      } else {
         if (company === undefined){
            return (
               <>
                  <p>something went wrong</p>
               </>
            )
         } else {
            return (
               <main>
                  <div>
                     <h1 className="flex justify-center">Job Create Page Working</h1>
                  </div>
                  <JobForm {...props} company={company} />
               </main>
            )
         }
      }
   }
}

export default JobCreate;