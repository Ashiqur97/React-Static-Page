import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
           
                <div className="col">
                    <h4>Developers</h4>
                    <p>App</p>
                    <p>Json</p>
                    <p>Token Lists</p>
                    <p>Api</p>
                </div>
             
                <div className="col">
                    <h4>Community</h4>
                    <p>Paradoxical Hacker Squad</p>
                    <p>System Error</p>
                    
                    <p>D4rk3nc0d1ng</p>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <p>App</p>
                    <p>Analytics</p>
                    <p>Token Lists</p>
                    <p>Defi</p>
                </div>
            </div>
            <p>@D4rk3nc0d1ng</p>
        </div>
    )
}

export default Footer