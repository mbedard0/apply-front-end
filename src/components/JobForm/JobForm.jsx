import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const JobForm = (props) => {
   const navigate = useNavigate()
   const [formData, setFormData] = useState({
      company: props.company._id,
      jobTitle: '',
      description: '',
      salary: '',
      employmentType: '',
      categories: '',
   })



   return ( 
      <>
         <h1 className="flex justify-center">Job Form Working</h1>
      </>
   );
}

export default JobForm;