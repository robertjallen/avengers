import React from 'react'

function routeToAvenger(props, avenger){
  props.history.push(`/avengers/${avenger.id}`);
}

 function AvengersList(props) {
   console.log('AvnList', props)
  return (
    <div className="characters-list-wrapper">
      {props.avengers.map((avenger, id) => (
        <div className="character-card" key={id}>
          <img src={avenger.thumbnail} alt={avenger.name}/>
          <div onClick={() => routeToAvenger(props, avenger)}>
            <h2>{avenger.name}</h2>
          </div>
            
            <p>{avenger.nickname}</p>
        </div> 
      ))}
    </div>
  )
}

export default AvengersList;