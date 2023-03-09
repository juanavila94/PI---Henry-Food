/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Paginate = ({recipesPerPage, recipes, paginate  }) => {
  const pageNumbers = [];
  for (let i=0; i<= Math.ceil(recipes / recipesPerPage); i++){
       pageNumbers.push(i+1) 
  }
    return (
         <nav>
            <ul>
              {pageNumbers && pageNumbers.map((n,index) => (
                <li key={index}> 
                  <a onClick={() => paginate(n)}> {n}</a>
                </li>
              ))}
            </ul>
        </nav>
  )
}


export default Paginate