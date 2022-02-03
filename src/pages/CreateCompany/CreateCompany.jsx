import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CompanyForm from '../../components/CompanyForm/CompanyForm'
import * as profileService from '../../services/profileService'

const CreateCompany = (props) => {
  const location = useLocation()
  const profile = props.profile

  if (profile === undefined) {
    return (
      <>
      </>
    )
  } else {
    return (
      <>
        {profile.status === 'individual' ?
          <div className="flex justify-center">
            <div className="mt-10">You must be registered as a representative of a company to access this page.</div>
          </div>
          :
          <main>
            <div>
              <h1 className="text-4xl pb-5 pt-2 flex justify-center">
                Create an Apply page for your company
              </h1>
              <h3 className='mb-5 flex justify-center'>
                Placeholder text for subtitle...
              </h3>
            </div>
            <CompanyForm {...props} />
          </main>
          // if the props pass x value, render this element below
        }
      </>
    )
  }
}

export default CreateCompany