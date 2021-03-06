import { Link } from 'react-router-dom'

const NavBar = ({ profile, handleLogout }) => {
  return (
    <>
      <div class="navbar shadow-lg bg-neutral text-neutral-content">
        <div class="flex-none px-2 mx-2">
          <span class="text-lg font-bold">
            Apply
          </span>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/">Home</Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to='/jobs'>
              Find Jobs
            </Link>
            {profile &&
              <Link className="btn btn-ghost btn-sm rounded-btn" to='/create-job'>
                Post a Job
              </Link>
            }
            <Link className="btn btn-ghost btn-sm rounded-btn" to='/companies'>
              Companies
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to='/about'>
              About
            </Link>
          </div>
        </div>
        <div className="flex-none">
          {profile ?
            <>
              <Link className="btn btn-ghost btn-sm rounded-btn" to="" onClick={handleLogout}>LOG OUT</Link>
              <Link className="btn btn-ghost btn-sm rounded-btn" to="/profile">Profile</Link>
            </>
            :
            <>
              <Link className="btn btn-ghost btn-sm rounded-btn" to="/login">Log In</Link>
              <Link className="btn btn-ghost btn-sm rounded-btn" to="/signup">Sign Up</Link>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default NavBar
