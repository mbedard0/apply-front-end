import React, { useState } from 'react';
import CompanyForm from '../../components/CompanyForm/CompanyForm'

const CreateCompany = (props) => {
  return (
    <>
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
    </>
  )
}

export default CreateCompany