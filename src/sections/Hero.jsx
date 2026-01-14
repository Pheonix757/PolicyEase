import React from 'react';
import Button from '../components/Button';
import './Hero.css';

const Hero = ({ onExplore, onLearnMore, onCheckEligibility }) => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <h1 className="hero-title">
                        Understanding Government Policies Made <span className="highlight">Simple</span>
                    </h1>
                    <p className="hero-subtitle">
                        PolicyEase decodes complex Indian government schemes into clear, easy-to-read language.
                        Verified information, tailored for verified citizens.
                    </p>
                    <div className="hero-actions">
                        <Button onClick={onCheckEligibility} variant="primary" size="large">
                            Check Eligibility
                        </Button>
                        <Button onClick={onExplore} variant="white" size="large">
                            Search Schemes
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hero-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;
