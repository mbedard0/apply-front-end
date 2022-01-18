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
      <h1>Sign Up</h1>
      <p>{message}</p>
      { !status['type'] ?
      <>
        <h3>
          Are you a job seeker or a company?
        </h3>
        <button 
          className='btn'
          onClick={handleIndividual}
        >
          Job Seeker
        </button>
        <button 
          className='btn'
          onClick={handleCompany}
        >
          Company
        </button>

      </>
      : ''
      }
      { status['type'] === 'individual' ? 
        <SignupForm {...props} updateMessage={updateMessage} /> :
        ''
      }
      { status['type'] === 'company' ? 
      <SignupFormCompany {...props} updateMessage={updateMessage} /> :
      ''
    }
    </main>
  )
}

export default Signup
