import React from 'react'
import '../App.css'
import {Route, Link} from 'react-router-dom'

import AvengerInfo from './AvengersDescription';
import AvengerMovies from './AvengerMovies';

export default function AvengersPage(props) {
  const id = props.match.params.id;
  const avenger = props.avengers.find(avenger => `${avenger.id}` === id)
  return (
    <div>
      <img className='character-image' src={avenger.thumbnail} alt={avenger.name}/>
      <div className='character-info-wrapper'>
        <h1>{avenger.name}</h1>
        <h3>{avenger.nickname}</h3>
        
      </div>

      <Link to={`/avengers/${props.match.params.id}/description`}>Description </Link>
      <Link to={`/avengers/${props.match.params.id}/movies`}>Movies</Link>
      <Route path='/avengers/:id/description'
         render={props => <AvengerInfo {...props} avenger={avenger} />}
        />
      <Route path='/avengers/:id/movies'
        render={props => <AvengerMovies {...props} avenger={avenger} />} 
        />
    </div>
  )
}
