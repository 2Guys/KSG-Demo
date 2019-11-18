import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Home (props) {
    const {location} = props
    if (location.pathname.match('/world')) {
        return null
    }
        return (
            <div className='container'>
                <h1>KIDS SEE GHOST</h1>
                <h5>Demo</h5>
                <h4>By: Sayeed Joseph & Vincent Tse</h4>
                <p>this is a demo of the Kids See Ghost the game. 
                It is based on the album Kids See Ghost by Kid Cuid and Kanye West.</p>
                <Link to='/world'>
                    <button> Start</button>
                </Link>
                
            </div>
        )
}

export default withRouter(Home);