import React from 'react'

import {avengers} from '../data'

export default function AvengersPage(props) {
  const id = props.match.params.id;
  const avenger = avengers.find(avenger => `${avenger.id}` === id)
  return (
    <div>
      <h3>Avengers Page</h3>
      <img src={avenger.thumbnail}/>
      <h2>{avenger.name}</h2>
      <p>{avenger.nickname}</p>
    </div>
  )
}
