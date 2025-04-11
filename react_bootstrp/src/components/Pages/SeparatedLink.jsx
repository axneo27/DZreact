import {React, Fragment} from 'react'

const SeparatedLink = () => {
  const url = 'https://pbs.twimg.com/media/Gnnci3kaMAEVQJs.jpg';

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

export default SeparatedLink;