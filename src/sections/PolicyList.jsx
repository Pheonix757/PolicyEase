import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { policies } from '../data/policies';
import './PolicyList.css';

const PolicyList = ({ category, onSelectPolicy, onBack }) => {
    const filteredPolicies = policies.filter(p => p.categoryId === category.id);

    return (
        <section className="policy-list-section animate-fade-in">
            <div className="container">
                <div className="list-header">
                    <Button variant="outline" onClick={onBack} className="back-btn">
                        &larr; Back to Categories
                    </Button>
                    <div className="list-title-wrapper">
                        <h2 className="list-title">{category.label} Policies</h2>
                        <p className="list-subtitle">Verified schemes curated for you</p>
                    </div>
                </div>

                {filteredPolicies.length === 0 ? (
                    <div className="empty-state">
                        <p>No policies found in this category yet.</p>
                    </div>
                ) : (
                    <div className="policies-grid">
                        {filteredPolicies.map(policy => (
                            <Card key={policy.id} className="policy-card">
                                <div className="policy-badge">Verified</div>
                                <h3 className="policy-title">{policy.title}</h3>
                                <p className="policy-desc">{policy.description}</p>
                                <div className="policy-actions">
                                    <Button variant="primary" onClick={() => onSelectPolicy(policy)}>
                                        View Simplified Version
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PolicyList;
