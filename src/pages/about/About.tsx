import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, User, BookOpen, Calendar, Book, Trophy, Heart, Award, Briefcase, Target, Users, MapPin, Zap } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            {/* 1. Hero Section */}
            <section className="about-hero">
                <div className="about-hero-text">
                    <div className="hero-badge">NEW CHALLENGE 2024</div>
                    <h1 className="about-title">
                        निर्णायक<br />
                        <span className="text-saffron-dark">पाऊल.</span>
                    </h1>
                    <blockquote className="hero-quote">
                        "जनतेचा आवाज हाच माझा श्वास, आणि
                        महाराष्ट्राचा विकास हेच माझे ध्येय."
                    </blockquote>
                    <p className="hero-quote-author">- आदरणीय एकनाथ शिंदे साहेब</p>

                    <button className="btn-blue-solid">
                        Read Manifesto <ArrowRight size={16} />
                    </button>
                </div>
                <div className="about-hero-image">
                    {/* Portrait Image Placeholder */}
                    <div className="portrait-placeholder">
                        Portrait of Gulabrao Patil
                    </div>
                </div>
            </section>

            {/* 2. Personal Intro Section */}
            <section className="personal-intro">
                <div className="intro-left">
                    <h2>वैयक्तिक परिचय / Personal Profile</h2>
                    <p className="intro-desc">
                        Born into a family deeply rooted in the social fabric of Maharashtra, the journey of our leader began in the heart of Jalgaon. Dedication to public service was the foundation of this transformative journey. With unwavering commitment to the principles of Hindutva and inclusive development, he has emerged as a prominent voice in Maharashtra politics.
                    </p>

                    <div className="info-grid">
                        <div className="info-item">
                            <User size={20} className="info-icon" />
                            <div>
                                <span className="info-label">FULL NAME</span>
                                <span className="info-value">Gulabrao Raghunath Patil</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <BookOpen size={20} className="info-icon" />
                            <div>
                                <span className="info-label">POSITION</span>
                                <span className="info-value">Minister for Water Supply & Sanitation</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <Calendar size={20} className="info-icon" />
                            <div>
                                <span className="info-label">DATE OF BIRTH</span>
                                <span className="info-value">5th June, 1966</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin size={20} className="info-icon" />
                            <div>
                                <span className="info-label">CONSTITUENCY</span>
                                <span className="info-value">Jalgaon District</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="intro-right">
                    <div className="struggle-box">
                        <h3>Early Life & Struggles / प्रारंभिक जीवन</h3>
                        <p>
                            Growing up with modest means, Gulabrao Patil witnessed the raw challenges faced by the common citizen. His early years were shaped by the fiery speeches of the Shiv Sena movement, instilling in him a sense of duty towards his soil and his people.
                        </p>
                        <p>
                            Working at the grassroots level, he organized local 'shakhas', focusing on healthcare and rural development in the Jalgaon district. This period defined his philosophy that power is solely a tool for service, not privilege.
                        </p>
                        <p>
                            His journey from a common man to a respected political figure stands as testimony to his dedication, resilience, and unwavering commitment to serving the people of Maharashtra.
                        </p>
                        <div className="color-bar">
                            <div className="c-saffron"></div>
                            <div className="c-white"></div>
                            <div className="c-blue"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values Section */}
            <section className="core-values">
                <div className="values-header">
                    <h2>कार्यप्रणाली व मूल्ये</h2>
                    <p>OUR CORE PILLARS OF GOVERNANCE</p>
                </div>

                <div className="values-grid">
                    {/* Top Row Cards */}
                    <div className="value-card v-saffron">
                        <span className="icon-wrapper">🚩</span>
                        <h3>हिंदुत्व (Hindutva)</h3>
                        <p>Protecting our cultural heritage and identity while fostering a sense of national pride and unity among all citizens.</p>
                    </div>
                    <div className="value-card v-dark">
                        <span className="icon-wrapper">📈</span>
                        <h3>Development</h3>
                        <p>Modern infrastructure for a thriving Maharashtra. Focus on agriculture, water supply, and industry.</p>
                    </div>
                    <div className="value-card v-dark">
                        <span className="icon-wrapper">👥</span>
                        <h3>Social Justice</h3>
                        <p>Equality and empowerment for the marginalized. Ensuring government schemes reach the last mile.</p>
                    </div>

                    {/* Bottom Row Cards */}
                    <div className="value-card v-blue">
                        <h3>Youth<br />Empowerment</h3>
                        <p>Creating jobs and future-ready skills.</p>
                    </div>
                    <div className="value-card v-white-horizontal">
                        <div className="horizontal-content">
                            <h3>सर्वसमावेशक विकास</h3>
                            <p>
                                We believe in a governance model that listens before it speaks. Our commitment is to the last person
                                in the line, ensuring that the fruit of progress reaches every household in the state.
                            </p>
                        </div>
                        <div className="horizontal-stat">
                            <span className="stat-box">100%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Family and Legacy */}
            <section className="family-legacy">
                <div className="family-image-wrapper">
                    <div className="family-placeholder">Family Photo Illustration</div>
                </div>
                <div className="family-text">
                    <h2>कुटुंब आणि वारसा</h2>
                    <p>
                        Behind every strong leader is a family that understands the weight of sacrifice.
                        Rooted in the hardworking farming community of Khandesh, a legacy he carries with pride
                        in every policy he advocates for.
                    </p>
                    <div className="family-quote-box">
                        <p>"My family didn't just teach me values, they showed me how to live them through service to the grassroots movement."</p>
                    </div>
                </div>
            </section>

            {/* 5. Education & Qualifications */}
            <section className="education-section">
                <div className="section-header">
                    <h2>शिक्षा आणि योग्यता / Education & Qualifications</h2>
                </div>
                <div className="education-grid">
                    <div className="edu-card">
                        <div className="edu-icon"><BookOpen size={28} /></div>
                        <h4>Bachelor of Arts</h4>
                        <p className="edu-detail">Graduated with distinction in Social Sciences, specializing in Indian History and Political Science</p>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon"><Award size={28} /></div>
                        <h4>Political Administration Certification</h4>
                        <p className="edu-detail">Advanced training in Public Administration and Governance from Maharashtra State Academy</p>
                    </div>
                    <div className="edu-card">
                        <div className="edu-icon"><Target size={28} /></div>
                        <h4>Rural Development Expertise</h4>
                        <p className="edu-detail">30+ years of hands-on experience in grassroots organizing and rural community development programs</p>
                    </div>
                </div>
            </section>


            {/* 7. Key Achievements */}
            <section className="achievements-section">
                <div className="section-header">
                    <h2>मुख्य कार्यसिद्धी / Key Achievements</h2>
                </div>
                <div className="achievements-grid">
                    <div className="achievement-card">
                        <div className="achievement-icon"><Briefcase size={32} /></div>
                        <h4>Water Infrastructure</h4>
                        <p>Launched 500+ water supply projects benefiting 2 million+ citizens across rural and urban areas of Maharashtra.</p>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon"><Users size={32} /></div>
                        <h4>Healthcare Initiatives</h4>
                        <p>Established 50+ community health centers and organized 100+ medical camps in underserved rural regions.</p>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon"><Zap size={32} /></div>
                        <h4>Rural Development</h4>
                        <p>Facilitated development of 200+ villages with modern infrastructure, electricity access, and improved connectivity.</p>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon"><Trophy size={32} /></div>
                        <h4>Youth Empowerment</h4>
                        <p>Trained 10,000+ youth in vocational skills and entrepreneurship, creating sustainable livelihoods and economic opportunities.</p>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon"><Heart size={32} /></div>
                        <h4>Social Welfare</h4>
                        <p>Implemented schemes benefiting farmers, women entrepreneurs, and marginalized communities across the state.</p>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon"><Award size={32} /></div>
                        <h4>Recognition</h4>
                        <p>Awarded prestigious titles for contributions to rural development, healthcare, and public service by state and national organizations.</p>
                    </div>
                </div>
            </section>

            {/* 8. Vision & Mission */}
            <section className="vision-mission">
                <div className="vm-container">
                    <div className="vm-card vm-vision">
                        <div className="vm-header">
                            <Target size={32} className="vm-icon" />
                            <h3>दृष्टिकोण / Vision</h3>
                        </div>
                        <p>To build a Maharashtra where every citizen has access to basic amenities, quality education, and livelihood opportunities. A state where development reaches the last person in the line, and no one is left behind.</p>
                    </div>
                    <div className="vm-card vm-mission">
                        <div className="vm-header">
                            <Zap size={32} className="vm-icon" />
                            <h3>मिशन / Mission</h3>
                        </div>
                        <p>To implement inclusive development policies that balance economic growth with social justice. To ensure transparent governance, accountability, and citizen participation in decision-making at all levels of administration.</p>
                    </div>
                </div>
            </section>

            {/* 9. Beyond Politics */}
            <section className="beyond-politics">
                <div className="bp-header">
                    <div className="bp-line"></div>
                    <h2>राजकारणाच्या पलीकडे / BEYOND POLITICS</h2>
                    <div className="bp-line"></div>
                </div>
                <div className="bp-grid">
                    <div className="bp-item">
                        <div className="bp-icon"><Book size={24} /></div>
                        <div className="bp-content">
                            <h4>Avid Reader</h4>
                            <p>Passionate about history and political biographies that shape world perspectives and influence policy decisions.</p>
                        </div>
                    </div>
                    <div className="bp-item">
                        <div className="bp-icon"><Trophy size={24} /></div>
                        <div className="bp-content">
                            <h4>Sports Enthusiast</h4>
                            <p>A firm believer in the power of sports to build character and team spirit among youth and communities.</p>
                        </div>
                    </div>
                    <div className="bp-item">
                        <div className="bp-icon"><Heart size={24} /></div>
                        <div className="bp-content">
                            <h4>Social Service</h4>
                            <p>Dedicated weekends to community engagement, healthcare donation drives, and grassroots service activities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Bottom CTA */}
            <section className="about-cta-banner">
                <div className="about-cta-content">
                    <h2>चला, नव्या महाराष्ट्राच्या निर्मितीत सहभागी व्हा!</h2>
                    <p>
                        Join the movement. Let's build a future where every voice matters and every hand contributes to progress.
                    </p>
                    <div className="about-cta-buttons">
                        <button className="btn-dark-solid">CONNECT WITH ME</button>
                        <button className="btn-outline-dark">VOLUNTEER NOW</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
