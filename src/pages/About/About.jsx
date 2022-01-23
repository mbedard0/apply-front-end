

const About = (props) => {
  return ( 
    <>
      <h1 className="text-4xl pb-5 pt-2 flex justify-center mb-1 mt-5">About</h1>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum odio mauris, vitae porttitor risus luctus sed. Mauris vestibulum magna quis vulputate posuere. Vivamus viverra iaculis magna a ullamcorper. Sed quis est posuere, tincidunt lectus id, bibendum nulla. Curabitur vitae leo ultrices lacus mattis tincidunt. Maecenas quis sapien sit amet est lacinia imperdiet. Ut ornare ipsum lacus, vel finibus mauris vulputate quis. Integer aliquam molestie purus, eu porttitor purus accumsan vel. Fusce vitae augue ipsum. Suspendisse sed scelerisque ex. Vivamus ultricies, lectus et vulputate ullamcorper, justo odio ultrices augue, vitae tempor felis ante quis urna. Etiam dui erat, semper vel justo non, consectetur pretium nibh. Integer auctor interdum arcu sit amet ultrices.
          </p>
          <hr className="divide-y mt-10"/>
          <h2 className="text-3xl pb-5 pt-2 flex justify-center mb-1 mt-5">
            The Team
          </h2>
          <div className="grid grid-cols-6">
            <div className="col-start-2 col-span-4">
              <img src="" alt="" />
              <h3 className="text-xl flex justify-center mb-1">Alexander Maniwang</h3>
              <p className="mb-5">
                About Alex goes here...
              </p>
              <img src="" alt="" />
              <h3 className="text-xl flex justify-center mb-1">Meiling Bedard</h3>
              <p>
                About Meiling goes here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;