import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import SignupFormCompany from '../../components/SignupFormCompany/SignupFormCompany'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])
  const [status, setStatus] = useState({})

  const handleIndividual = evt => {
    setStatus({ ...status, type: 'individual'})
  }

  const handleCompany = evt => {
    setStatus({ ...status, type: 'company'})
  }

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1
        className="text-4xl pb-5 pt-2"
      >
        Sign Up
      </h1>
      <p>{message}</p>
      { !status['type'] ?
      <>
        <h3
          className="pb-5"
        >
          Are you a job seeker or a company?
        </h3>
        <div className="pb-5">
          <button 
            className='btn btn-primary btn-wide btn-lg'
            onClick={handleIndividual}
          >
            Job Seeker
          </button>
        </div>
        <button 
          className='btn btn-secondary btn-wide btn-lg'
          onClick={handleCompany}
        >
          Company
        </button>
      </>
      : ''
      }
      { status['type'] ? 
        <div>
          <SignupForm {...props} statusType={status} updateMessage={updateMessage} />
        </div> :
        ''
      }
    </main>
  )
}

export default Signup
