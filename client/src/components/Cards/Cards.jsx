import React from 'react'
import { Link } from 'react-router-dom'
import style from './Cards.module.css'

const Cards = (props) => {
  return (
    <div className={style.container}>
       <Link to={`/recipes/:${props.id}`}>
          <p>name:{props.name}</p>
        </Link>
        <img src={props.image} alt="dietpic" />
        <p>diets:{props.diets}</p>
  </div>
  )
}

export default Cards