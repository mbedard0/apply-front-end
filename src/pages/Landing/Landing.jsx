// import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main>
      <div className="text-center text-neutral-content">
        <h1 className="mb-5 text-5xl font-bold text-black my-5">
          Apply
        </h1>
        <div className="form-control flex justify-center">
          <input type="text" placeholder="Find Jobs" className="input input-bordered text-black self-center w-3/6" />
        </div>
        <button className="btn btn-primary my-5">Search</button>
      </div>
      <div className="divider"></div>
      {/* about us or what we do.... even the github stuff maybe can go here? */}
    </main>
  )
}

export default Landing
