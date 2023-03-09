import React from 'react'
import { Link } from 'react-router-dom'
import style from './LandingStyle.module.css'

const Landing = () => {
  return (
    <div className={style.Background}>Landing
        
          <div>
               <button>
               <Link to='/'>to home</Link>
              </button>
           </div>
    </div>
  )
}

export default Landing