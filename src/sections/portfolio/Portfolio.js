import React from 'react'
import PortfolioCart from '../../components/PortfolioCart';
import {portfolioDetails} from '../../utils/constant'

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio'>
        <h2>Checkout my portfolio</h2>
        <div className=' portfoliodetails' >
        {portfolioDetails.map((val,key)=>(
            <PortfolioCart 
            key={key} 
            pic={val.picPath} 
            title={val.title} 
            detail={val.detail} 
            picInfo={val.alt} />
        ))}
    </div>
    </div>
  )
}

export default Portfolio