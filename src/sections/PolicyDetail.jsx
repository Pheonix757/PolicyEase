import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import { IconVolume, IconSquare, IconPlay } from '../components/Icons';
import './PolicyDetail.css';

const PolicyDetail = ({ policy, onBack }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speechRef = useRef(null);

    useEffect(() => {
        return () => {
            if (speechRef.current) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const handleReadAloud = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        // Handle summary being array or string
        const summaryText = Array.isArray(policy.simplified.summary)
            ? policy.simplified.summary.join('. ')
            : policy.simplified.summary;

        let textToRead = `
      ${policy.title}. 
      ${policy.description}. 
      Summary: ${summaryText}.
      ${policy.labels?.benefits || 'Key Benefits'}: ${policy.simplified.benefits.join('. ')}.
    `;

        if (policy.simplified.eligibility && policy.simplified.eligibility.length > 0) {
            textToRead += `${policy.labels?.eligibility || 'Eligibility'}: ${policy.simplified.eligibility.join('. ')}.`;
        }

        const processText = Array.isArray(policy.simplified.process)
            ? policy.simplified.process.join('. ')
            : policy.simplified.process;

        textToRead += `${policy.labels?.process || 'How to apply'}: ${processText} `;

        if (policy.simplified.faqs) {
            textToRead += " Frequently Asked Questions. ";
            policy.simplified.faqs.forEach(faq => {
                textToRead += `Question: ${faq.question}.Answer: ${faq.answer}.`;
            });
        }

        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = 0.9;
        utterance.pitch = 1;

        const setVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            const swaraVoice = voices.find(v => v.name.includes('Microsoft Swara'));
            const indianVoice = voices.find(v => v.lang.includes('IN') || v.name.includes('India'));

            if (swaraVoice) {
                utterance.voice = swaraVoice;
            } else if (indianVoice) {
                utterance.voice = indianVoice;
            }
        };

        setVoice();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = setVoice;
        }

        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
    };

    // Helper to render URLified text
    const renderProcess = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = text.split(urlRegex);
        return parts.map((part, i) =>
            urlRegex.test(part) ? <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{part}</a> : part
        );
    };

    return (
        <section className="policy-detail-section animate-fade-in">
            <div className="container">
                <Button variant="outline" onClick={onBack} className="back-btn">
                    &larr; Back to Policies
                </Button>

                <div className="detail-card">
                    <header className="detail-header">
                        <div className="verified-tag">
                            <span className="check-icon">✓</span> Verified Policy
                        </div>
                        <h1 className="detail-title">{policy.title}</h1>
                        <p className="detail-subtitle">{policy.description}</p>

                        <button
                            className={`read-aloud-btn ${isSpeaking ? 'speaking' : ''}`}
                            onClick={handleReadAloud}
                            aria-label={isSpeaking ? "Stop reading" : "Read policy aloud"}
                        >
                            {isSpeaking ? <IconSquare size={20} /> : <IconVolume size={20} />}
                            {isSpeaking ? "Stop Reading" : "Read Aloud"}
                        </button>
                    </header>

                    <div className="simplified-content">
                        <div className="content-block summary-block">
                            <h3>What is it?</h3>
                            {Array.isArray(policy.simplified.summary) ? (
                                <ul className="summary-list">
                                    {policy.simplified.summary.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            ) : (
                                <p>{policy.simplified.summary}</p>
                            )}
                        </div>

                        <div className="content-grid">
                            <div className="content-block">
                                <h3>{policy.labels?.benefits || 'Key Benefits'}</h3>
                                <ul>
                                    {policy.simplified.benefits.map((benefit, idx) => (
                                        <li key={idx}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>

                            {policy.simplified.eligibility && policy.simplified.eligibility.length > 0 && (
                                <div className="content-block">
                                    <h3>{policy.labels?.eligibility || 'Who can apply?'}</h3>
                                    <ul>
                                        {policy.simplified.eligibility.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="content-block process-block">
                            <h3>{policy.labels?.process || 'How to apply?'}</h3>
                            {Array.isArray(policy.simplified.process) ? (
                                <ul className="summary-list"> {/* Reusing summary-list style for bullets */}
                                    {policy.simplified.process.map((item, idx) => <li key={idx}>{renderProcess(item)}</li>)}
                                </ul>
                            ) : (
                                <p>{renderProcess(policy.simplified.process)}</p>
                            )}
                        </div>

                        {policy.simplified.misconceptions && (
                            <div className="content-block misconceptions-block">
                                <h3>Common Misconceptions</h3>
                                <div className="misconceptions-list">
                                    {policy.simplified.misconceptions.map((item, idx) => (
                                        <div key={idx} className="misconception-item">
                                            <div className="myth">
                                                <span className="icon-cross">❌</span>
                                                <span className="myth-text">"{item.myth}"</span>
                                            </div>
                                            <div className="reality">
                                                <span className="icon-check">✅</span>
                                                <span className="reality-text"><strong>Reality:</strong> {item.reality}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {policy.simplified.faqs && (
                            <div className="content-block faq-block">
                                <h3>Frequently Asked Questions (FAQs)</h3>
                                <div className="faq-list">
                                    {policy.simplified.faqs.map((faq, idx) => (
                                        <div key={idx} className="faq-item">
                                            <p className="faq-question"><strong>{idx + 1}. {faq.question}</strong></p>
                                            <p className="faq-answer">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolicyDetail;
