import React from 'react';
import Banner from '../../components/Banner';

import Navbar from '../../components/Navbar';

const Header = () => {
  return (
    <header id='home'>
        <Navbar/>
        <Banner/>
    </header>
  )
}

export default Header