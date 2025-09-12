import React from 'react';
import News1Image from '../Image/News1.jpg';
import News2Image from '../Image/News2.jpg';
import News3Image from '../Image/News3.jpg';
import News4Image from '../Image/News4.jpg';

const News = () => {
    const newsData = [
        {
            id: 1,
            title: "SECOND PLACE IN INTEL AI TRAINING PROGRAM 2025",
            description: "Honored to achieve Second Place in Intel AI Training Program 2025, demonstrating the Lab's research capabilities and AI applications.",
            image: News3Image,
            date: "18/8/2025"
        },
        {
            id: 2,
            title: "OPEN REGISTRATION – SUMMER COURSE 2025: PYTHON & MACHINE LEARNING COURSE",
            description: "Summer course 2025 on Python & Machine Learning for students interested in AI and Data Science fields.",
            image: News2Image,
            date: "18/6/2025"
        },
        {
            id: 3,
            title: "TOP 20 IN IOT CHALLENGE 2025",
            description: "Made it to Top 20 in IoT Challenge 2025 with innovative projects and real-world applications in the Internet of Things field.",
            image: News4Image,
            date: "27/5/2025"
        },
        {
            id: 4,
            title: "RECRUITING MEMBERS FOR HCMUT EE MACHINE LEARNING & IOT LAB",
            description: "Opportunity to join the Lab's research team, develop skills and experience in ML & IoT fields.",
            image: News1Image,
            date: "1/6/2025"
        }
    ];

    return (
        <section id="news" className="container">
            <h2>Latest News</h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
                Updates on the latest news and events from ML&IoT Lab
            </p>
            
            <div className="news-grid">
                {newsData.map((news) => (
                    <div key={news.id} className="news-card">
                        <div className="news-image">
                            <img src={news.image} alt={news.title} />
                            <div className="news-date">{news.date}</div>
                        </div>
                        <div className="news-content">
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                            <a href="#" className="news-read-more">Read more →</a>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="news-see-more">
                <a href="#" className="see-more-btn">View All News</a>
            </div>
        </section>
    );
};

export default News;
