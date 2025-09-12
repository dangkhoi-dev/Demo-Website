import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>ML&IoT Lab</h3>
                    <p>Unleashing the power of Artificial Intelligence and Internet of Things</p>
                </div>
                
                <div className="footer-section">
                    <h4>Contact Information</h4>
                    <div className="contact-info">
                        <p><i className="icon">📍</i> Ho Chi Minh University of Technology, Room 403.1</p>
                        <p><i className="icon">📧</i> nkloi@hcmut.edu.vn</p>
                        <p><i className="icon">📞</i> +84 123 456 789</p>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Social Links</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/hcmut.ml.iot.lab" target="_blank" rel="noopener noreferrer">
                            <i className="icon">📘</i> Facebook
                        </a>
                        <a href="https://youtube.com/@mliotlab" target="_blank" rel="noopener noreferrer">
                            <i className="icon">📺</i> YouTube
                        </a>
                        <a href="https://github.com/ml.iot.lab" target="_blank" rel="noopener noreferrer">
                            <i className="icon">💻</i> GitHub
                        </a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Working Hours</h4>
                    <div className="working-hours">
                        <p>Monday - Friday: 8:00 - 17:00</p>
                        <p>Saturday: 8:00 - 12:00</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 ML&IoT Lab. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;