import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Home (props) {
    const {location} = props
    if (location.pathname.match('/world')) {
        return null
    }
        return (
            <div>
                <h1>GAME DEMO</h1>
                
                <Link to='/world'>Start</Link>
                
            </div>
        )
}

export default withRouter(Home);