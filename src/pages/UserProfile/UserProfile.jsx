import { useState, useEffect } from "react";
import * as profileService from '../../services/profileService'

const UserProfile = (props) => {

   const [profile, setProfile] = useState()

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
            <main className="text-center">
               {/* depending on what we want, the information below can change */}
               <h1 className="text-5xl font-bold">{profile.name}</h1>
               <p>{profile.email}</p>
               <p>{profile.status}</p>
               {/* add change email? */}
               {/* incorporate the change password here as well*/}
            </main>
         </>
      );
   }
}

export default UserProfile;