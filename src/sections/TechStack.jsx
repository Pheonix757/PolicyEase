import React from 'react';

const TechStack = () => {
    return (
        <section style={{ padding: 'var(--space-12) 0', background: 'var(--color-bg-subtle)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
                    Powered by Trusted Technologies
                </h2>
                <div style={{ display: 'flex', gap: 'var(--space-8)', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--color-text-body)', fontWeight: 500 }}>
                    <span>React (Vite)</span>
                    <span>Vanilla CSS</span>
                    <span>JavaScript</span>
                    <span>Google Fonts</span>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
