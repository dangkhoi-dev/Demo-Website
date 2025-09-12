import React from 'react';
import { Link } from 'react-router-dom';
import AllLabImage from '../Image/AllLab.jpg';

const Hero = () => {
    return (
        <section id="home">
            <div className="hero-background">
                <img src={AllLabImage} alt="All Lab" className="hero-bg-image" />
                <div className="hero-overlay"></div>
            </div>
            <div className="container hero-content">
                <h1>ML&IoT Lab</h1>
                <p>Unleashing the Power of Artificial Intelligence and Internet of Things</p>
                <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                    High-accuracy credit card fraud detection using Machine Learning
                </p>
                <Link to="/demo" className="cta-button">
                    Try Now
                </Link>
            </div>
        </section>
    );
};

export default Hero;