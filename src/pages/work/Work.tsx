import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, HeartHandshake, Building2, Quote, Trophy } from 'lucide-react';
import './Work.css';

const Work: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="work-container">
            {/* 1. Hero Section */}
            <section className="work-hero bg-surface text-dark">
                <div className="max-width-container work-hero-grid">
                    <div className="work-hero-text">
                        <h1 className="work-title text-primary-color">कार्य आणि यश</h1>
                        <div className="title-divider mb-8"></div>
                        <p className="work-subtitle">
                            महाराष्ट्राच्या स्वाभिमानासाठी आणि जनतेच्या सेवेसाठी वाहिलेले जीवन. 
                            आमचे कार्य हीच आमची खरी ओळख आहे.
                        </p>
                        <button className="btn-solid-primary mt-8">संपूर्ण जाहीरनामा वाचा</button>
                    </div>
                    <div className="work-hero-image-wrapper">
                        <div className="hero-img-box shadow-2xl">
                            <img 
                                src="https://pbs.twimg.com/profile_images/1663553880783990788/d0OPQqPY.jpg" 
                                alt="Leader" 
                                className="hero-img-actual grayscale-hover"
                            />
                        </div>
                        <div className="years-badge bg-primary-light">
                            <span className="years-num text-primary-color">२५+</span>
                            <span className="years-text text-primary-color">वर्षांचा जनसेवा वारसा</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Impact at a Glance */}
            <section className="impact-section bg-gray-light">
                <div className="max-width-container">
                    <div className="impact-grid">
                        <div className="impact-card bg-white shadow-sm">
                            <Users size={40} className="text-primary-color mb-4" />
                            <h3 className="impact-number text-dark">५००+</h3>
                            <p className="impact-label">प्रकल्प पूर्ण</p>
                        </div>
                        <div className="impact-card bg-primary text-white shadow-lg highlight-card">
                            <HeartHandshake size={40} className="mb-4" />
                            <h3 className="impact-number text-white">१M+</h3>
                            <p className="impact-label text-white border-none">लाभार्थी नागरिक</p>
                        </div>
                        <div className="impact-card bg-white shadow-sm">
                            <Building2 size={40} className="text-primary-color mb-4" />
                            <h3 className="impact-number text-dark">१२</h3>
                            <p className="impact-label">आदर्श शहरे</p>
                        </div>
                        <div className="impact-card bg-secondary text-white shadow-sm">
                            <Trophy size={40} className="text-white mb-4" />
                            <h3 className="impact-number text-white">२५</h3>
                            <p className="impact-label text-white border-none">सेवेची वर्षे</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Major Projects */}
            <section className="projects-section bg-surface padding-section border-bottom">
                <div className="max-width-container">
                    <div className="projects-header mb-16">
                        <div>
                            <h2 className="section-title uppercase">महत्त्वाचे प्रकल्प</h2>
                            <p className="text-gray subtitle-mt font-medium">विकासाची नवी क्षितीजे</p>
                        </div>
                    </div>

                    <div className="projects-grid">
                        {/* Project 1 */}
                        <div className="project-card group">
                            <div className="project-img-wrap">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-naBqgxpB1Ju2mNlxU9xTKfa1PIBB52u2J7VK2tro2vodeARgOKoaTdOo2IRHjlVnJ1KvWiLu3qrcjWDx8E6N2hXhlA7XGNuoVAlLs4fb0XAvwGcU5BQ8kz5e1EzxqRlrZbmnkhA-LcllZCsYzZnYd52r0c7EpMZH-RDcLCLXWOizYf6hthcp0BunSn_7Ni5Qp18EdaX82Ee8H9Cq7xxL7mBDzqwepA3Wu6UBBFibGwQMyH9f7ruPi1fuxI5KTlxhWcOO6S0AD-k" 
                                    alt="Coastal Road" 
                                    className="project-img group-hover-scale"
                                />
                                <div className="project-tag bg-primary text-white">पायाभूत सुविधा</div>
                            </div>
                            <h3 className="project-title group-hover-text">कोस्टल रोड प्रकल्प</h3>
                            <p className="project-desc">मुंबईच्या वाहतुकीला गती देण्यासाठी आणि प्रवासाचा वेळ वाचवण्यासाठी ऐतिहासिक किनारपट्टी रस्ता प्रकल्प.</p>
                            <div className="project-line bg-primary"></div>
                        </div>

                        {/* Project 2 */}
                        <div className="project-card group">
                            <div className="project-img-wrap">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANcowNQX04HcRTAXLqDl6P0nWKBzGSPmRYf7xEc4SlLUDvKNLZqxSoiEDQUcGb3NJteJAP1_cCMXBrAR3PDv52vlSeXylWV92xnmN-4nEWdEvzk40EzXawv_Smt4kvsm6dvcnG8-HdRGGVPByIYpqHlUARnZp_SHn39SPrN6Nt7zRtyyQq6ahxE8Y4UfDF4Hw3ANXNacz2cxkSRhbCAY4eHc7w-BqLDtAmxmNHzgKvFt-8c0MIZAFES_vwAWy20CdYPBnhZZiOQ-aE" 
                                    alt="Clinic" 
                                    className="project-img group-hover-scale"
                                />
                                <div className="project-tag bg-primary text-white">आरोग्य सेवा</div>
                            </div>
                            <h3 className="project-title group-hover-text">ग्रामीण आरोग्य विस्तार</h3>
                            <p className="project-desc">दुर्गम भागातील प्रत्येक नागरिकाला मोफत आणि दर्जेदार आरोग्य सेवा मिळावी यासाठी नवीन ५० रुग्णालयांची उभारणी.</p>
                            <div className="project-line bg-primary"></div>
                        </div>

                        {/* Project 3 */}
                        <div className="project-card group">
                            <div className="project-img-wrap">
                                <img 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFbN2lYA3JTkVtLFXf66HySJ0Fot5ugyzbnWVnihmY487mc1Z9Y-Vms71m6ygUaVt5P7wdXjbyNGJ3vW1zVpc28SxVpDojlsZJP3VQd7c9sqknorM9mrHDmg2CydrCQp56yM4ovsembzjIU-Jv9nTMl3pWPMb1ASRh4Dcik9zOIFUyjYkXE_Wz4YrYmiuW05fsC_sFR3PYbjR5_LDwl4UG7_3FEnJwTQ3oYg-QVD9fWmprlvcHKRMJGqj_qqjmklj0rHKUIVqGJWwS" 
                                    alt="Security" 
                                    className="project-img group-hover-scale"
                                />
                                <div className="project-tag bg-primary text-white">महिला सुरक्षा</div>
                            </div>
                            <h3 className="project-title group-hover-text">शक्ती उपक्रम</h3>
                            <p className="project-desc">महिलांच्या सुरक्षेसाठी शहरात अत्याधुनिक सीसीटीव्ही जाळे आणि विशेष सुरक्षा पथकाची स्थापना.</p>
                            <div className="project-line bg-primary"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Awards & Recognition */}
            <section className="awards-section bg-gray-lighter padding-section">
                <div className="max-width-container awards-grid">
                    <div className="awards-text">
                        <h2 className="section-title text-dark mb-6">सन्मान आणि गौरव</h2>
                        <p className="text-gray mb-8">कर्तृत्वाला मिळालेली पावती आणि जनतेचा विश्वास.</p>
                        <Trophy size={80} className="text-primary-color opacity-20" />
                    </div>
                    
                    <div className="awards-cards-grid">
                        <div className="award-card bg-white border-left-primary">
                            <h4 className="award-name">सर्वोत्कृष्ट जनसेवक पुरस्कार</h4>
                            <p className="award-org">महाराष्ट्र शासन - २०२३</p>
                        </div>
                        <div className="award-card bg-white border-left-secondary">
                            <h4 className="award-name">ग्रामीण विकास नेतृत्व रत्न</h4>
                            <p className="award-org">पंचायत राज संस्था - २०२२</p>
                        </div>
                        <div className="award-card bg-white border-left-primary">
                            <h4 className="award-name">युवा प्रेरणा सन्मान</h4>
                            <p className="award-org">सामाजिक विकास मंच - २०२१</p>
                        </div>
                        <div className="award-card bg-white border-left-secondary">
                            <h4 className="award-name">पर्यावरण रक्षक गौरव</h4>
                            <p className="award-org">जागतिक पर्यावरण संस्था - २०२०</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Testimonials */}
            <section className="testimonials-section bg-surface padding-section">
                <div className="max-width-container">
                    <h2 className="section-title text-center text-dark uppercase mb-16">लोकभावनेचा प्रतिसाद</h2>
                    
                    <div className="testimonials-grid">
                        {/* Testimonial 1 */}
                        <div className="testimonial-card bg-white shadow-lg">
                            <Quote size={60} className="quote-icon text-primary-light" />
                            <p className="testimonial-text italic mb-8">
                                "आमच्या गावात पाणी टंचाईची मोठी समस्या होती. साहेबांच्या मार्गदर्शनाखाली राबवलेल्या जलसंधारण प्रकल्पामुळे आज आमचे गाव टँकरमुक्त झाले आहे. हेच खरे काम!"
                            </p>
                            <div className="author-wrap">
                                <div className="author-img-box">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCukKowbhjQjfSE98JFocyeVugkfpg04YSP8x-DJPtIoDQHTDsuxqpA-nlxzRfKWjw9QsMUiwft6tpivexoH9rsJuiDwFBnNrVSgGpCzGE8CWJg3gzYpn-m2kbBINGJwnBBNVvfnOedGLXv1OsrPAG9EX-DECB13npL5wxv-yepzjzPV-LkjDEkl5DY8t8EeRNprAgdG2YKplbjTfRMI0lN1vJuI4Z8QzOuGpG1pqiTJiB2_3gFmkJnXEQZ11e-IfYrsEifzgqmlGgN" 
                                        alt="Sudamrao Patil" 
                                    />
                                </div>
                                <div className="author-info">
                                    <h5 className="author-name">सुदामराव पाटील</h5>
                                    <p className="author-role text-primary-color">शेतकरी, सातारा</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="testimonial-card bg-white shadow-lg offset-y">
                            <Quote size={60} className="quote-icon text-primary-light" />
                            <p className="testimonial-text italic mb-8">
                                "शिक्षण आणि आरोग्याच्या बाबतीत मध्यमवर्गीयांसाठी अनेक योजना राबवल्या गेल्या. महापालिकेतून मिळणारी मदत आता थेट आणि पारदर्शकपणे मिळते."
                            </p>
                            <div className="author-wrap">
                                <div className="author-img-box">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCseISRDRHAgALBZcBw0ExfLNGqY-oBAEHx1yRpJqjqQ0Az_q_H7s2fKyZfWi2v-9vsQz0iZIfuql0m2fXTBHbuR_eArRXFqv7lBfPpdU0vz9n8t-8z8jhEwioDGAaZWX-G4ABggUXrlOSnAwlJUcKngyTQ-wMye40fcIImfkbxOwVC_zGebsCeP9B5I2URyZbCU7T5KZGFJKKr69ZMCd9NS08w5qlNAtP9kTifVookZ3wuFMheNcjUQ_fDiAnNxLU5S8QeTKPFCfDs" 
                                        alt="Savita Kulkarni" 
                                    />
                                </div>
                                <div className="author-info">
                                    <h5 className="author-name">सविता कुलकर्णी</h5>
                                    <p className="author-role text-primary-color">शिक्षिका, मुंबई</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA Banner */}
            <section className="work-cta">
                <div className="max-width-container text-center">
                    <h2 className="cta-title">आमच्या मोहिमेत सामील व्हा</h2>
                    <p className="cta-subtitle">महाराष्ट्राच्या उज्वल भविष्यासाठी आपले योगदान द्या.</p>
                    <div className="cta-btn-group">
                        <button className="btn-solid-white text-primary-color">स्वयंसेवक बना</button>
                        <button className="btn-outline-white">देणगी द्या</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
