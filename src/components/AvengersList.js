import React from 'react'
import {avengers} from '../data'
import {Link} from 'react-router-dom' 

 function AvengersList() {
  return (
    <div>
      {avengers.map(avenger => (
        <div >
          <img src={avenger.thumbnail} alt={avenger.name}/>
          <Link to={`avengers/${avenger.id}`}>
            <h2>{avenger.name}</h2>
            <p>{avenger.nickname}</p>
          </Link>
        </div> 
      ))}
    </div>
  )
}

export default AvengersList;