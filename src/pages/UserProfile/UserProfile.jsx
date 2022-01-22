import { useState, useEffect } from "react";
import * as profileService from '../../services/profileService'
// import * as companyService from '../../services/companyService'

const UserProfile = (props) => {

   const [profile, setProfile] = useState()
   // const [company, setCompany] = useState()

   useEffect(() => {
      profileService.getMyProfile(props.user.profile)
         .then(myProfile => {
            setProfile(myProfile)
         })
   }, [])


   if (profile === undefined) {
      return (
         <>
         </>
      )
   } else {
      return (
         <>
            {profile.status === 'individual' ?
               <>
                  <main className="text-center">
                     {/* depending on what we want, the information below can change */}
                     <h1 className="text-5xl font-bold">{profile.name}</h1>
                     <p>{profile.email}</p>
                     <p>{profile.status}</p>
                     {/* add change email? */}
                     {/* incorporate the change password here as well*/}

                     <div>
                        {/* Companies Applied For  */}
                        <h2 className="text-4xl font-bold">Applications:</h2>
                     </div>

                  </main>
               </>
               :
               <>
                  <main className="text-center">
                     <div>
                        {/* put image of company brand here  */}
                        <div class="avatar placeholder">
                           <div class="bg-neutral-focus text-neutral-content rounded-full w-24 h-24">
                              <span class="text-xl">{profile.name[0]}</span>
                           </div>
                        </div>
                        <h1 className="text-5xl font-bold">Company Name: {profile.name}</h1>
                        <h1 className="text-3xl font-bold">Company Owner: {profile.name}</h1>
                        <p>Company Email: {profile.email}</p>
                        {/* make sure status is correct */}
                        <p>{profile.status}</p>
                     </div>
                     <div>
                        {/* job listings  */}
                        <h2 className="text-4xl font-bold">Your Job Listings:</h2>
                     </div>
                  </main>
               </>
            }
         </>
      );
   }
}

export default UserProfile;