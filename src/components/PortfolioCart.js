import React from 'react'

const PortfolioCart = ({pic,picInfo,title,detail}) => {
  return (
    <div className='cart'>
        <img src={pic} alt={picInfo}/>
        <section className='cartDetail'>
            <h3>{title}</h3>
            <p>{detail}</p>
        </section>
    </div>
  )
}

export default PortfolioCart