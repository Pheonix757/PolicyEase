import React, { useState } from 'react';
import { policies } from '../data/policies';
import { categories } from '../data/categories';
import './EligibilityChecker.css';

const EligibilityChecker = ({ onSelectPolicy, onBack }) => {
    const [formData, setFormData] = useState({
        age: '',
        occupation: '',
        state: 'All',
        incomeRange: 'any'
    });

    const [results, setResults] = useState(null);

    const indianStates = [
        "All", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const incomeOptions = [
        { label: "Any Income", value: "any" },
        { label: "Low Income (< 2.5L)", value: "low" },
        { label: "Middle Income (2.5L - 7.5L)", value: "medium" },
        { label: "High Income (> 7.5L)", value: "high" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheck = (e) => {
        e.preventDefault();

        const filtered = policies.filter(policy => {
            if (!policy.eligibilityCriteria) return false;

            const { minAge, maxAge, occupations, states, incomeRange } = policy.eligibilityCriteria;

            // Age Check
            const userAge = parseInt(formData.age);
            if (userAge < minAge || userAge > maxAge) return false;

            // Occupation Check
            if (formData.occupation && !occupations.includes(formData.occupation)) {
                return false;
            }

            // State Check
            if (formData.state !== 'All' && !states.includes('All') && !states.includes(formData.state)) {
                return false;
            }

            // Income Check
            if (formData.incomeRange !== 'any' && incomeRange !== 'any' && incomeRange !== formData.incomeRange) {
                return false;
            }

            return true;
        });

        setResults(filtered);
    };

    return (
        <section className="eligibility-checker">
            <div className="container">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Home
                </button>

                <div className="checker-card animate-fade-in">
                    <div className="checker-header">
                        <h2>Eligibility Checker</h2>
                        <p>Fill in your details to find schemes you qualify for</p>
                    </div>

                    <form className="checker-form" onSubmit={handleCheck}>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="e.g. 25"
                                className="form-input"
                                required
                                min="0"
                                max="120"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="occupation">Occupation / Category</label>
                            <select
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="">Select Occupation</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <select
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="form-select"
                            >
                                {indianStates.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="incomeRange">Annual Income Range</label>
                            <select
                                id="incomeRange"
                                name="incomeRange"
                                value={formData.incomeRange}
                                onChange={handleChange}
                                className="form-select"
                            >
                                {incomeOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="submit-btn">
                            Find Useful Schemes
                        </button>
                    </form>

                    {results && (
                        <div className="checker-results animate-fade-in">
                            <div className="results-header">
                                <h3>Found {results.length} Matching Schemes</h3>
                            </div>

                            {results.length > 0 ? (
                                <div className="results-grid">
                                    {results.map(policy => (
                                        <div key={policy.id} className="policy-result-card">
                                            <div className="policy-info">
                                                <h4>{policy.title}</h4>
                                                <p>{policy.description}</p>
                                            </div>
                                            <button
                                                className="view-btn"
                                                onClick={() => onSelectPolicy(policy)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-results">
                                    <p>No schemes found matching your criteria. Try adjusting your inputs.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EligibilityChecker;
