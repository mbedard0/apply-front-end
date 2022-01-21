import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/companies`

function createCompany(companyData) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(companyData)
  })
  .then(res => res.json())
}

function getCompanies() {
  return fetch(BASE_URL, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function getCompany(id) {
  return fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` }
  })
    .then(res => res.json())
}

export {
  createCompany,
  getCompanies,
  getCompany
}