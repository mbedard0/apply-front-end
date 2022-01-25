import React, { useState, useEffect } from 'react';
import JobForm from '../../components/JobForm/JobForm'
import * as profileService from '../../services/profileService'


const JobCreate = (props) => {
   const [profile, setProfile] = useState()
   const [company, setCompany] = useState()

   useEffect(() => {
      profileService.getMyProfile(props.user.profile)
         .then(myProfile => {
            setProfile(myProfile)
         })
   }, [])

   useEffect(() => {
      profileService.getCompany(props.user.profile)
         .then(company => {
            setCompany(company)
         })
   }, [])

   if (profile === undefined || company === undefined) {
      return (
         <>
         </>
      )
   } else {
      return (
         <>
            {profile.status === 'individual' ?
               <main>
                  <div className="flex justify-center">
                     <div className="mt-10">You must be registered as a representative of a company to access this page.</div>
                  </div>
               </main>
               :
               <main>
                  <div>
                     <h1 className="flex justify-center">Job Create Page Working</h1>
                  </div>
                  <JobForm {...props} profile={profile} company={company} />
               </main>
            }
         </>
      )
   }
}

export default JobCreate;