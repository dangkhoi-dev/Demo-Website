import React from 'react';
import CreditCardFraudImage from '../Image/Credit_card_fraud.png';

const About = () => {
    const teamMembers = [
        { name: "Trần Phan Đăng Khôi" },
        { name: "Lê Huy Hoàng" },
        { name: "Đỗ Hồng Phúc" },
        { name: "Phan Bá Thanh" },
        { name: "Lâm Thanh Phương" }
    ];

    return (
        <section id="about" className="container">
            <h2>Our Project</h2>
            
            <div className="about-hero">
                <div className="about-hero-content">
                    <h3>Credit Card Fraud Detection with AI</h3>
                    <p>Credit card payment fraud is increasing due to the misuse of stolen card information in e-commerce. Our project uses multiple machine learning algorithms and handles data imbalance using SMOTE technique.</p>
                    <p>The Random Forest model combined with Voting Classifier achieves outstanding performance, detects fraud effectively and maintains low false alarm rate, suitable for practical application.</p>
                </div>
                <div className="about-hero-image">
                    <img src={CreditCardFraudImage} alt="Credit Card Fraud Detection" />
                </div>
            </div>

            <div className="project-details">
                <div className="detail-section">
                    <h3>📈 Problem Statement</h3>
                    <p>Credit card payment fraud is increasing due to the misuse of stolen card information in e-commerce.</p>
                </div>

                <div className="detail-section">
                    <h3>🔧 Technical Approach</h3>
                    <p>Using multiple machine learning algorithms and handling data imbalance using SMOTE technique.</p>
                </div>

                <div className="detail-section">
                    <h3>🎯 Results</h3>
                    <p>The Random Forest model combined with Voting Classifier achieves outstanding performance, detects fraud effectively and maintains low false alarm rate, suitable for practical application.</p>
                </div>
            </div>

            <div className="team-section">
                <h3>👥 Development Team</h3>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <div className="member-avatar">
                                <span>{member.name.charAt(0)}</span>
                            </div>
                            <h4>{member.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;