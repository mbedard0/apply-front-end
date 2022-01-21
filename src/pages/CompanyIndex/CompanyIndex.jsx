import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as companyService from '../../services/companyService'

const CompanyIndex = props => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    companyService.getCompanies()
    .then(allCompanies => setCompanies(allCompanies))
  },[])

  return (
    <>
      <h1 className="text-4xl pb-5 pt-2 flex justify-center mb-5">All Companies</h1>
      {/* Maybe add a search bar here? */}
      <div className="grid grid-cols-3 gap-4 place-content-center ml-20 mr-20">
        {/* link company show pages here */}
        {companies.map(company => {
          return (
            <div class="card w-4/5 place-content-center card-bordered card-compact lg:card-normal" key={company._id}>
              <div class="card-body">
                <Link
                  to='/companyDetails'
                  state={company}
                >
                  <h2 class="card-title link link-neutral">{company.companyName}</h2>
                </Link>
                <h3 className="text-gray-500 mb-2 -mt-1 italic">{company.location}</h3>
                <p>{company.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default CompanyIndex;