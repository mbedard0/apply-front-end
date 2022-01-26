import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import * as companyService from '../../services/companyService'

const CompanyView = (props) => {
  const locationFunc = useLocation()
  const compInfo = locationFunc.state
  const [company, setCompany] = useState()

  useEffect(() => {
    companyService.getCompany(compInfo._id)
      .then(company => setCompany(company))
  }, [])

  if (props.profile === undefined || company === undefined) {
    return (
      <>
      </>
    )
  } else {
    return (
      <>
        <h1 className="text-4xl pb-5 pt-2 flex justify-center mb-1 mt-5">{company.companyName}</h1>
        <h2 className="flex justify-center text-2xl">{company.location}</h2>
        <p className="flex justify-center mt-5">{company.description}</p>
        {props.profile.status === 'individual' ?
          <ReviewForm {...props} />
          :
          <></>
        }
      </>
    );
  }
}

export default CompanyView;