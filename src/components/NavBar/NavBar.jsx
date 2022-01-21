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
        <div class="flex-1 px-2 mx-2">
          <div class="items-stretch hidden lg:flex">
            <Link class="btn btn-ghost btn-sm rounded-btn" to="/">Home</Link>
            <a class="btn btn-ghost btn-sm rounded-btn">
              Find Jobs
            </a>
            <Link class="btn btn-ghost btn-sm rounded-btn" to='/companies'>
              Companies
            </Link>
            <a class="btn btn-ghost btn-sm rounded-btn">
              About
            </a>
          </div>
        </div>
        <div className="flex-none">
          {user ?
            <>
              <Link class="btn btn-ghost btn-sm rounded-btn" to="" onClick={handleLogout}>LOG OUT</Link>
              <Link class="btn btn-ghost btn-sm rounded-btn" to="/profile">Profile</Link>
            </>
            :
            <>
              <Link class="btn btn-ghost btn-sm rounded-btn" to="/login">Log In</Link>
              <Link class="btn btn-ghost btn-sm rounded-btn" to="/signup">Sign Up</Link>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default NavBar
