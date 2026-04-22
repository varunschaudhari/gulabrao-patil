import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Leaf, Shield, Landmark, AlertTriangle, 
    GraduationCap, Factory, HeartPulse, 
    MapPin, Users, Droplet 
} from 'lucide-react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="portfolio-container">
            {/* 1. Hero Section */}
            <section className="portfolio-hero">
                <div className="portfolio-hero-wrapper max-width-container">
                    <div className="portfolio-hero-text">
                        <div className="portfolio-badge">
                            <span className="dot-pulse"></span> जनसेवा हीच ईश्वर सेवा
                        </div>
                        <h1 className="portfolio-title">
                            शासकीय <br/>
                            <span className="text-primary-color">जबाबदाऱ्या</span>
                        </h1>
                        <p className="portfolio-subtitle">
                            महाराष्ट्राच्या सर्वांगीण विकासासाठी आणि शिवसैनिक म्हणून जनतेने सोपवलेली कर्तव्ये पार पाडण्यासाठी आम्ही सदैव कटिबद्ध आहोत.
                        </p>
                    </div>
                    <div className="portfolio-hero-image-wrapper">
                        <div className="hero-img-container">
                            <img 
                                src="https://pbs.twimg.com/profile_images/1663553880783990788/d0OPQqPY.jpg" 
                                alt="Official Portrait" 
                                className="portfolio-hero-img grayscale-hover"
                            />
                        </div>
                        <div className="experience-box shadow-primary">
                            <span className="exp-number">२५+</span>
                            <span className="exp-text">वर्षे जनसेवेचा प्रदीर्घ अनुभव</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Current Portfolios Bento Grid */}
            <section className="portfolios-section bg-light-gray">
                <div className="max-width-container">
                    <div className="section-header-row mb-12">
                        <h2 className="section-title">विद्यमान पदे</h2>
                        <div className="title-underline-short"></div>
                    </div>
                    
                    <div className="bento-grid">
                        {/* Card 1: Agriculture */}
                        <div className="bento-card bg-white bento-span-8 group">
                            <div className="bento-content">
                                <Leaf size={40} className="text-primary-color mb-6" />
                                <h3 className="bento-card-title">कृषी व फलोत्पादन विभाग</h3>
                                <p className="bento-card-desc">
                                    महाराष्ट्रातील शेतकऱ्यांच्या समृद्धीसाठी सिंचन प्रकल्प, पीक विमा आणि आधुनिक तंत्रज्ञानाचा प्रसार करण्यावर आमचा भर आहे.
                                </p>
                            </div>
                            <div className="bento-footer">
                                <span className="bento-position-tag text-primary-color">कॅबिनेट मंत्री</span>
                            </div>
                            {/* Background Watermark Icon */}
                            <Leaf size={140} className="bento-watermark" />
                        </div>

                        {/* Card 2: Shiv Sena Sub-Leader */}
                        <div className="bento-card bg-secondary text-white bento-span-4">
                            <div className="bento-content">
                                <Shield size={40} className="mb-6 opacity-90" />
                                <h3 className="bento-card-title text-white">शिवसेना उपनेते</h3>
                                <p className="bento-card-desc opacity-80 text-white border-none">
                                    हिंदुहृदयसम्राट बाळासाहेब ठाकरे यांच्या विचारांना पुढे नेण्याची आणि पक्षाची संघटनात्मक बांधणी करण्याची मोठी जबाबदारी.
                                </p>
                            </div>
                            <div className="bento-footer border-top-light">
                                <span className="bento-position-tag text-white">पक्षांतर्गत जबाबदारी</span>
                            </div>
                        </div>

                        {/* Card 3: Guardian Minister */}
                        <div className="bento-card bg-gray-lighter bento-span-4">
                            <div className="bento-content">
                                <Landmark size={32} className="text-secondary mb-4" />
                                <h4 className="bento-card-subtitle">पालकमंत्री</h4>
                                <p className="bento-card-desc">
                                    जिल्हा नियोजन आणि विकासाचा थेट समन्वय साधत जिल्ह्याच्या प्रगतीला वेग देणे.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Disaster Management */}
                        <div className="bento-card bg-primary text-white bento-span-8 bento-horizontal">
                            <div className="bento-horizontal-content">
                                <h4 className="bento-card-title text-white mb-2">राज्य आपत्ती व्यवस्थापन</h4>
                                <p className="opacity-90 text-sm">
                                    नैसर्गिक आपत्ती काळात तातडीने मदत कार्य पोहोचवणे आणि पूर्वतयारीवर लक्ष केंद्रित करणे.
                                </p>
                            </div>
                            <div className="bento-horizontal-icon">
                                <AlertTriangle size={70} className="opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Legislative Focus */}
            <section className="legislative-section padding-section bg-white">
                <div className="max-width-container legislative-grid">
                    <div className="legislative-text-box">
                        <h2 className="section-title mb-6">विधीमंडळातील <span className="text-primary-color">प्राधान्ये</span></h2>
                        <p className="legislative-desc mb-8">
                            विधानसभेत जनतेच्या प्रश्नांना वाचा फोडणे आणि धोरणात्मक निर्णयात सक्रिय सहभाग नोंदवणे हे आमचे ध्येय आहे.
                        </p>
                        <div className="quote-box border-left-primary">
                            <p className="quote-text">"प्रत्येक धोरण हे शेवटच्या घटकापर्यंत पोहोचले पाहिजे."</p>
                        </div>
                    </div>
                    
                    <div className="legislative-list">
                        <div className="focus-item">
                            <div className="focus-icon-wrap bg-primary-light">
                                <GraduationCap size={24} className="text-primary-color" />
                            </div>
                            <div className="focus-text-content">
                                <h4>शिक्षण क्षेत्रात सुधारणा</h4>
                                <p>ग्रामीण भागातील शाळांचे डिजिटलायझेशन आणि व्यावसायिक कौशल्यावर आधारित अभ्यासक्रमासाठी आग्रही भूमिका.</p>
                            </div>
                        </div>

                        <div className="focus-item">
                            <div className="focus-icon-wrap bg-secondary-light">
                                <Factory size={24} className="text-secondary" />
                            </div>
                            <div className="focus-text-content">
                                <h4>औद्योगिक विकास व रोजगार</h4>
                                <p>नव्या औद्योगिक वसाहतींची स्थापना करून स्थानिक तरुणांना रोजगाराच्या संधी उपलब्ध करून देणे.</p>
                            </div>
                        </div>

                        <div className="focus-item">
                            <div className="focus-icon-wrap bg-accent-light">
                                <HeartPulse size={24} className="text-accent" />
                            </div>
                            <div className="focus-text-content">
                                <h4>आरोग्य पायाभूत सुविधा</h4>
                                <p>जिल्हा रुग्णालयांचे सक्षमीकरण आणि दुर्गम भागात मोबाइल हेल्थ युनिट्स कार्यान्वित करणे.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Committee Memberships */}
            <section className="committees-section bg-gray-lightest padding-section">
                <div className="max-width-container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">समिती सदस्यता</h2>
                        <p className="text-gray subtitle-mt">विविध शासन नियुक्त समित्यांवरील सक्रिय सहभाग</p>
                    </div>

                    <div className="committees-grid">
                        <div className="committee-card bg-white shadow-sm hover-shadow">
                            <h5 className="committee-name">लोकलेखा समिती</h5>
                            <p className="committee-role text-primary-color">सदस्य</p>
                            <p className="committee-desc mt-4">शासकीय खर्चावर नियंत्रण आणि पारदर्शकता सुनिश्चित करण्याचे काम.</p>
                        </div>

                        <div className="committee-card bg-white shadow-sm hover-shadow">
                            <h5 className="committee-name">पायाभूत सुविधा विकास परिषद</h5>
                            <p className="committee-role text-primary-color">विशेष निमंत्रित</p>
                            <p className="committee-desc mt-4">राज्यातील महामार्ग आणि मेट्रो प्रकल्पांच्या प्रगतीचा आढावा.</p>
                        </div>

                        <div className="committee-card bg-white shadow-sm hover-shadow">
                            <h5 className="committee-name">मराठी भाषा संवर्धन समिती</h5>
                            <p className="committee-role text-primary-color">अध्यक्ष</p>
                            <p className="committee-desc mt-4">प्रशासनात आणि जनजीवनात मराठी भाषेचा वापर वाढवण्यासाठी प्रयत्नशील.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Constituency Duties */}
            <section className="constituency-section">
                <div className="constituency-wrapper">
                    <div className="constituency-text-area bg-dark text-white">
                        <h2 className="section-title text-white mb-8">
                            मतदारसंघ <span className="text-saffron-light">कर्तव्य</span>
                        </h2>
                        
                        <div className="duties-list">
                            <div className="duty-item">
                                <MapPin size={24} className="text-saffron-light flex-shrink-0" />
                                <p>प्रत्येक आठवड्याला मतदारसंघात जनता दरबार आणि विकासकामांची पाहणी.</p>
                            </div>
                            <div className="duty-item">
                                <Users size={24} className="text-saffron-light flex-shrink-0" />
                                <p>स्थानिक बचत गटांना प्रोत्साहन आणि स्वयंरोजगारासाठी मार्गदर्शन शिबिरे.</p>
                            </div>
                            <div className="duty-item">
                                <Droplet size={24} className="text-saffron-light flex-shrink-0" />
                                <p>जलयुक्त शिवार २.० अंतर्गत पाणी टंचाईमुक्त मतदारसंघासाठी मिशन मोडवर काम.</p>
                            </div>
                        </div>

                        <button className="btn-outline-saffron mt-12">
                            विकास अहवाल पहा
                        </button>
                    </div>
                    
                    <div className="constituency-image-area">
                        <div className="gradient-overlay-left"></div>
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVNcKKkJcAOkUrptmUcL27fvmoSYgn6JzWwAmDX9yjAyuvCq1iRUbVgqosmrh7n7Q4tRC48dA9zWrpAghsxCZNvHLtUc_OoNrLK8KJYE2HlOwjy7hSRiDOJeH3jJGHPQPPVxbbj3HfDNH86TvFQUnEeQIYkVjvONUfC6vzLoV7hnCSRx83NMd_m-42NGHTAYhXQELza0oN-ihGhNdNIXqQiIQAsKBVRrSYcHa_fZ1pHf556Wgg5xW9ACNHLrAbI7y3_gY7e2ejzyG2" 
                            alt="Map visualization" 
                            className="constituency-img"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Portfolio;
