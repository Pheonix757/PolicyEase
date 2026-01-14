import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How PolicyEase Works</h2>
                    <p className="section-subtitle">Three simple steps to understand your benefits.</p>
                </div>

                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Choose a Category</h3>
                        <p>Select the group that best describes you (Student, Farmer, etc.).</p>
                    </div>

                    <div className="step-connector"></div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Select a Policy</h3>
                        <p>Browse through the list of curated government schemes.</p>
                    </div>

                    <div className="step-connector"></div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Read & Understand</h3>
                        <p>View the simplified explanation in clear, easy language.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
