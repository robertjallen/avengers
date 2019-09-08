import React from 'react'

import {avengers} from '../data'

export default function AvengersPage(props) {
  const id = props.match.params.id;
  const avenger = avengers.find(avenger => `${avenger.id}` === id)
  return (
    <div>
      <img src={avenger.thumbnail} alt={avenger.name}/>
      <h1>{avenger.name}</h1>
      <h3>{avenger.nickname}</h3>
      <p>{avenger.description}</p>
    </div>
  )
}
