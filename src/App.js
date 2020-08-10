import React, { Fragment } from 'react'
import logo from './images/logo.svg'

const App = () => (
  <Fragment>
    <img
      src={logo}
      width={150}
      height={150}
      alt='Leroy Merlin Brasil'
      data-testid='logo'
    />

    <marquee data-testid='marquee'>
      Leroy Merlin Brasil - Front-end Test
    </marquee>
  </Fragment>
)

export default App
