import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="content">
                <h2>Join Our DeFi Community</h2>
                <form action="https://getform.io/f/036f082e-7006-4fca-8d1d-f736f2cc4774" method="POST">
                    <div className="form-container display-col">
                        <input type="email" name='email' placeholder='Enter your email' />
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className="form-container">
                        <input type="checkbox"/> <p>Yes, I agree to receive email communications from D4rk3nc0d1ng.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscribe