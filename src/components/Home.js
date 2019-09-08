import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Avengers</h1>
            <h4>Danger</h4>
            <Link to='/avengers'>Enter at your own risk</Link>            
        </div>
    )
}
