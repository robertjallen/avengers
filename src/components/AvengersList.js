import React from 'react'
import {Link} from 'react-router-dom' 

 function AvengersList(props) {
   console.log('AvnList', props)
  return (
    <div>
      {props.avengers.map((avenger, id) => (
        <div key={id}>
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