import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
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
            <a className="btn btn-ghost btn-sm rounded-btn">
              Find Jobs
            </a>
            <Link className="btn btn-ghost btn-sm rounded-btn" to='/companies'>
              Companies
            </Link>
            <a className="btn btn-ghost btn-sm rounded-btn">
              About
            </a>
          </div>
        </div>
        <div className="flex-none">
          {user ?
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
