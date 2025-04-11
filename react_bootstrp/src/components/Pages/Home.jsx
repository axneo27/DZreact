import {React, Fragment} from 'react'

const Home = () => {
  const url = 'https://preview.redd.it/mewhenthathappens-v0-xd0oypqo49be1.jpeg?auto=webp&s=908860e0628a512968dd4c6117c32fc5606ad433';

  return (
    <div>
      <Fragment>
        <img src={url} alt="" style={{width: '400px', position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',}} />
      </Fragment>
    </div>
  )
}

export default Home;
