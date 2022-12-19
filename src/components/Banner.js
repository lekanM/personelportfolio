import React from 'react'
import Githubicon from '@mui/icons-material/GitHub'
import Instagramicon from '@mui/icons-material/Instagram'
import Linkicon from '@mui/icons-material/LinkedIn'
import Twitticon from '@mui/icons-material/Twitter'
const Banner = () => {
  return (
    <div className='banner'>
        <section>
            <h2>HI,I'm Lekan</h2>
            <p>Freelance Developer,Designer,Front-end Developer</p>
            <span><Githubicon/></span>
            <span><Instagramicon/></span>
            <span><Linkicon/></span>
            <span><Twitticon/></span>
        </section>
        <section></section>
    </div>
  )
}

export default Banner