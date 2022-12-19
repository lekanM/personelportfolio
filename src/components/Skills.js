import React from 'react';

import {skilsDtails} from '../utils/constant';

const Skills = () => {
  return (
    <div className='skills'>
        <section>
            <h2>My Skills</h2>
            <p>This are my skils. </p>
            <p>I'm very working on javascripts projects to get to mastery levels<br/>
            i also have a greate fundation on css</p>
        </section>
        <section>
           {skilsDtails.map((val,key)=>(
            <div className='skils-level' key={key}>
                <label>{val.name}</label>
                <progress value={val.value} max='100'></progress>
            </div>
           ))}
        </section>
    </div>
  )
}

export default Skills