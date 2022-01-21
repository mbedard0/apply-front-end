import { useLocation } from "react-router-dom";

const CompanyView = (props) => {
  const locationFunc = useLocation()
  const compInfo = locationFunc.state
  return (  
    <>
      <h1 className="text-4xl pb-5 pt-2 flex justify-center mb-1 mt-5">{compInfo.companyName}</h1>
      <h2 className="flex justify-center text-2xl">{compInfo.location}</h2>
      <p className="flex justify-center mt-5">{compInfo.description}</p>
    </>
  );
}

export default CompanyView;