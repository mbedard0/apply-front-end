import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import * as companyService from '../../services/companyService'

const CompanyIndex = props => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    companyService.getCompanies()
    .then(allCompanies => setCompanies(allCompanies))
  },[companies])

  return (
    <>
      <h1 className="text-4xl pb-5 pt-2 flex justify-center">All Companies</h1>
      <div className="flex justify-center">
        {/* need to put this in a grid */}
        {/* link company show pages here */}
        {companies.map(company => {
          return (
            <div class="card w-72 ml-5 card-bordered card-compact lg:card-normal">
              <figure>
                <img src="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{company.companyName}</h2>
                <h3>{company.location}</h3>
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