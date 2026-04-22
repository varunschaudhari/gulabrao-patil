import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';
import TimelineSection from '../../components/TimelineSection';
import './Home.css';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            {/* Image Carousel */}
            <ImageCarousel />

            {/* Hero Section */}
            <section className="hero-custom">
                <div className="hero-content-wrapper">
                    <div className="hero-text">
                        <div className="hero-tag">
                            <span className="red-line"></span>
                            हिंदुत्वाचा विचार
                        </div>

                        <div className="balasaheb-title">
                            <p>बाळासाहेब ठाकरे यांचे प्रिय</p>
                            <h2>मुलुख मैदान तोफ</h2>
                        </div>

                        <h1 className="hero-title">
                            Jai Maharashtra<br />
                            <span className="text-saffron">Jai Hindutva</span>
                        </h1>

                        <p className="hero-desc">
                            महाराष्ट्राच्या अभिमानासाठी आणि हिंदुत्वाच्या रक्षणासाठी सदैव तत्पर.
                            विकासाची नवी दिशा, संघर्षातून प्रगतीकडे.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-saffron">
                                <ArrowRight size={18} className="btn-icon" />
                                संपर्क साधा
                            </button>
                            <button className="btn-blue">अधिक माहिती</button>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <div className="hero-image-frame">
                            <img src="https://pbs.twimg.com/profile_images/1663553880783990788/d0OPQqPY_400x400.jpg" alt="Gulabrao Patil" className="politician-image" />
                            <div className="hero-name-tag">
                                <h3>मा. लोकप्रतिनिधी</h3>
                                <p>शिवसेना नेता</p>
                            </div>
                        </div>
                        <div className="hero-chevron-overlay">
                            <ChevronRight size={40} className="text-red" />
                            <ChevronRight size={40} className="text-red" style={{ marginLeft: '-25px' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="stats-banner">
                <div className="stats-container">
                    <div className="stat-item">
                        <h2 className="stat-number">५००+</h2>
                        <p className="stat-label">पूर्ण झालेले प्रकल्प</p>
                    </div>
                    <div className="stat-item">
                        <h2 className="stat-number">५०,०००+</h2>
                        <p className="stat-label">सक्रिय कार्यकर्ते</p>
                    </div>
                    <div className="stat-item">
                        <h2 className="stat-number">२४/७</h2>
                        <p className="stat-label">जनसंपर्क</p>
                    </div>
                    <div className="stat-item">
                        <h2 className="stat-number">१००%</h2>
                        <p className="stat-label">जनतेचे समाधान</p>
                    </div>
                </div>
            </section>

            {/* Works Section */}
            <section className="works-section">
                <div className="section-header">
                    <div className="section-title-wrap">
                        <span className="small-red">आमचे कार्य</span>
                        <h2>आमची विकासकामे</h2>
                    </div>
                    <p className="section-subtitle">
                        जलसंपदा आणि स्वच्छता क्षेत्रातील नाविन्यपूर्ण प्रकल्पातून
                        महाराष्ट्राच्या सर्वसामान्य जनतेचे जीवनमान उंचावणे हेच आमचे ध्येय.
                    </p>
                </div>

                <div className="works-grid">
                    {/* Card 1: Large Top Left */}
                    <div
                        className="work-card large-h"
                        style={{
                            backgroundImage: `url(${new URL('../assets/modern_indian_highway.jpg', import.meta.url).href})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="work-overlay">
                            <span className="work-tag">पायाभूत सुविधा</span>
                            <h3>आधुनिक रस्ते आणि महामार्ग</h3>
                            <p>तालुक्यातील प्रत्येक गावाला जोडणारे मजबूत रस्ते.</p>
                            <a href="#" className="read-more">अधिक वाचा <ArrowRight size={16} /></a>
                        </div>
                    </div>

                    {/* Card 2: Small Top Right */}
                    <div
                        className="work-card"
                        style={{
                            backgroundImage: `url(${new URL('../assets/free_health_images.jfif', import.meta.url).href})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="work-overlay">
                            <span className="work-tag">आरोग्य</span>
                            <h3>मोफत आरोग्य सेवा</h3>
                            <p>सर्वसामान्यांसाठी सुसज्ज रुग्णालये.</p>
                        </div>
                    </div>

                    {/* Card 3: Small Bottom Left */}
                    <div
                        className="work-card"
                        style={{
                            backgroundImage: `url(${new URL('../assets/youth employement.webp', import.meta.url).href})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="work-overlay">
                            <span className="work-tag">रोजगार</span>
                            <h3>युवा रोजगार संधी</h3>
                            <p>तरुणांना कौशल्य विकास आणि रोजगार.</p>
                        </div>
                    </div>

                    {/* Card 4: Text Box Bottom Right */}
                    <div className="work-text-card">
                        <h3>आणि बरेच काही...</h3>
                        <p>महाराष्ट्राच्या मुख्यमंत्र्यांच्या नेतृत्वाखाली
                            अनेक लोकोपयोगी विकासकामे प्रगतीपथावर आहेत.
                            शिक्षण, कृषी आणि जलसंपदा यावर विशेष भर.</p>
                        <button className="btn-saffron-sm">सर्व प्रकल्प पाहा</button>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <TimelineSection />

            {/* Gallery Section */}
            <section className="gallery-section">
                <h2>क्षणचित्रे : जनसंपर्क</h2>
                <p className="gallery-subtitle">लोकनेत्याची जनतेशी बांधिलकी आणि संपर्काचे काही क्षण.</p>

                <div className="gallery-masonry">
                    <div className="g-item div1">
                        <div className="placeholder-img rally">Rally Image</div>
                    </div>
                    <div className="g-item div2">
                        <div className="placeholder-img meeting">Meeting Citizens</div>
                    </div>
                    <div className="g-item div3">
                        <div className="placeholder-img speech">Public Speech</div>
                    </div>
                    <div className="g-item div4">
                        <div className="placeholder-img students">With Students</div>
                    </div>
                    <div className="g-item div5">
                        <div className="placeholder-img office">Office Work</div>
                    </div>
                    <div className="g-item div6">
                        <div className="placeholder-img inauguration">Inauguration</div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="cta-overlay">
                    <div className="cta-icon">👥</div>
                    <h2>महाराष्ट्राच्या परिवर्तनाचा भाग बना!</h2>
                    <p>आमच्या मोहिमेत सामील व्हा आणि समर्थ महाराष्ट्राचे स्वप्न साकार करण्यासाठी हातभार लावा.</p>
                    <div className="cta-form">
                        <input type="text" placeholder="तुमचा मोबाईल नंबर टाका" />
                        <button className="btn-saffron">नोंदणी करा</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
