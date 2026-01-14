import React from 'react';
import Card from '../components/Card';
import { IconBook, IconBriefcase, IconUsers, IconSearch } from '../components/Icons';
import { categories } from '../data/categories';
import './Categories.css';

// Map icon names to components
const iconMap = {
    IconBook,
    IconBriefcase,
    IconUsers,
    IconSearch
};

const Categories = ({ id, onSelectCategory }) => {
    return (
        <section id={id} className="categories-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Who are you looking for?</h2>
                    <p className="section-subtitle">Select a category to find policies relevant to you.</p>
                </div>

                <div className="categories-grid">
                    {categories.map((category) => {
                        const Icon = iconMap[category.iconName] || IconSearch;
                        return (
                            <Card
                                key={category.id}
                                className="category-card"
                                hoverEffect
                                onClick={() => onSelectCategory(category)}
                            >
                                <div className="category-icon-wrapper">
                                    <Icon size={32} />
                                </div>
                                <h3 className="category-title">{category.label}</h3>
                                <p className="category-desc">{category.description}</p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
