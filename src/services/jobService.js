import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/jobs`

function createJob(jobData) {
   return fetch(BASE_URL, {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
   })
      .then(res => res.json())
}

export { createJob }