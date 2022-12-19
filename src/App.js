import React from 'react';

//importing pages sections
import {Header,About,Portfolio,Contact,Foot} from './sections/'

const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Foot/>
    </>
  )
}

export default App