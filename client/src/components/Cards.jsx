import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  return (
    <div>
       <Link to={`/recipes/:${props.id}`}>
           </Link>
          <p>name:{props.name}</p>
      <p>image:{props.image}</p>
      <p>diets:{props.diets}</p>
  </div>
  )
}

export default Cards