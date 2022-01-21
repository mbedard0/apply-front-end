import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <>
      <main>
        <div>
          <div>
            {/* put background image here */}
          </div>
        </div>

        <div className='hero'>
          <div className="text-center text-neutral-content w-10/12 my-10">
            {/* <div className="bg-stone-500/60"> */}
              <h1 className="mb-5 text-5xl font-bold text-black my-6">
                Apply
              </h1>
              <div className="form-control flex">
                <div className="space-x-2 my-6">
                  <input type="text" placeholder="Find Jobs" className="input input-bordered text-black input-primary self-center w-3/6" />
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className="divider"></div>
        {/* about us or what we do.... even the github stuff maybe can go here? */}
        {/* run down of what the website is and does....  */}
      </main>
    </>
  )
}

export default Landing
