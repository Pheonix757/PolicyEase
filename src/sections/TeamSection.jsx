import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const teamMembers = [
        'Jatin',
        'Paawan',
        'Akshita',
        'Veer',
        'Abhishek'
    ];

    return (
        <section id="about" className="team-section animate-fade-in">
            <div className="container">
                <header className="team-header">
                    <span className="team-label">Credits</span>
                    <h2 className="team-title">
                        Project built by <span className="team-highlight">Team India</span>
                    </h2>
                    <p className="team-tagline">
                        "Built with the goal of making government policies understandable for every citizen."
                    </p>
                </header>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <h3 className="member-name">{member}</h3>
                        </div>
                    ))}
                </div>

                <div className="team-contact">
                    <a href="mailto:ppk3ja@gmail.com" className="contact-link">
                        Get in touch: ppk3ja@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
