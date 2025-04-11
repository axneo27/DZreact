import {React, Fragment} from 'react'

const Something = () => {
  const url = 'https://i.redd.it/er2so83vv7fc1.png';

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

export default Something;