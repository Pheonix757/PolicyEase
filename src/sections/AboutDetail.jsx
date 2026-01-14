import React, { useEffect } from 'react';
import Button from '../components/Button';
import './AboutDetail.css';

const AboutDetail = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="about-detail animate-fade-in">
            <div className="container">
                <Button variant="outline" onClick={onBack} className="back-btn">
                    &larr; Back to Home
                </Button>

                <div className="about-card">
                    <header className="about-header">
                        <h1 className="about-title">About PolicyEase</h1>
                        <p className="about-tagline">Making Governance Transparent & Accessible</p>
                    </header>

                    <div className="about-content">
                        <div className="about-section highlight-section">
                            <h2>What is PolicyEase?</h2>
                            <p>
                                <strong>PolicyEase</strong> is a citizen-first platform built to simplify Indian government policies and schemes.
                            </p>
                            <p>
                                Government documents are often long, complex, and hard to understand. PolicyEase breaks them down into clear, simple, and easy-to-read explanations so that every citizen can understand their rights and benefits.
                            </p>
                        </div>

                        <div className="about-section">
                            <h2>Why PolicyEase Exists</h2>
                            <div className="gap-info">
                                <p>Millions of people miss out on government benefits—not because they’re ineligible, but because they don’t understand the policy.</p>
                                <p className="bridge-text">PolicyEase exists to bridge this gap by converting complex policy language into plain, human-friendly explanations.</p>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2>What Makes PolicyEase Different</h2>
                            <ul className="feature-list">
                                <li>
                                    <span className="check">✅</span>
                                    <div>
                                        <strong>Simplified explanations</strong>
                                        <span>No legal jargon or technical clutter.</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="check">✅</span>
                                    <div>
                                        <strong>Verified Data</strong>
                                        <span>Cross-checked from official government sources.</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="check">✅</span>
                                    <div>
                                        <strong>Citizen Categorized</strong>
                                        <span>Tailored lists for farmers, students, workers, and more.</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="check">✅</span>
                                    <div>
                                        <strong>Eligibility Clarity</strong>
                                        <span>Quick checklists to see if you qualify.</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="check">✅</span>
                                    <div>
                                        <strong>Accessible Design</strong>
                                        <span>Inclusive features like "Read Aloud" support.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="about-section target-groups">
                            <h2>Who Is This For?</h2>
                            <p>PolicyEase is built for everyone who needs clear guidance:</p>
                            <div className="group-grid">
                                <div className="group-item">Students & Youth</div>
                                <div className="group-item">Farmers</div>
                                <div className="group-item">Workers</div>
                                <div className="group-item">Senior Citizens</div>
                                <div className="group-item">Women & Families</div>
                                <div className="group-item">Business & Startups</div>
                            </div>
                            <p className="impact-text"><em>If a policy affects you, it belongs here.</em></p>
                        </div>

                        <div className="about-section">
                            <h2>Accuracy & Verification</h2>
                            <div className="verification-card">
                                <p>Every policy listed on PolicyEase is reviewed using official government portals, notifications, and trusted public sources.</p>
                                <p>We aim to keep all information accurate and up-to-date, but users are always encouraged to verify final applications through official portals.</p>
                            </div>
                        </div>

                        <div className="about-section vision-section">
                            <h2>Our Vision</h2>
                            <blockquote className="vision-quote">
                                "No citizen should miss a benefit due to lack of understanding."
                            </blockquote>
                            <p className="vision-summary">
                                PolicyEase aims to become India’s most trusted platform for simplified government policy information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDetail;
