import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={MainVideo} type='video/mp4' />
        </video>
        <div className="hero-text">
                <h1>Decentralized</h1>
                <h1><span className="blue">System</span>Error</h1>
                <p>Learn Like Never Learn Before.</p>
                <div className="btn-group">
                    <button className="btn">Use</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>D4rk3nc0d1ng</h2>
            </div>
    </div>
  )
}

export default Hero