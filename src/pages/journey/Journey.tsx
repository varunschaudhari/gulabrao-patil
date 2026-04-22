import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplet, GraduationCap, Shield, Users, Briefcase, Trophy, Award, Zap } from 'lucide-react';
import './Journey.css';

const Journey: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="journey-container">
            {/* 1. Hero Section */}
            <section className="journey-hero">
                <div className="journey-hero-text">
                    <div className="hero-badge">राजकीय प्रवास</div>
                    <h1 className="journey-title">
                        माझा राजकीय<br />
                        <span className="text-saffron-dark">प्रवास</span>
                    </h1>
                    <blockquote className="hero-quote">
                        "महाराष्ट्राच्या मातीशी माझी बांधिलकी अतूट आहे. 
                        जनसेवा हाच माझा धर्म आणि विकास हेच माझे ध्येय."
                    </blockquote>
                    <p className="hero-quote-author">- सन्माननीय नेतृत्व</p>
                </div>
                <div className="journey-hero-image">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7XgfW1oW1pUKiMsObIL87gLpagdzSSDxQhuIEB1_RpKOxjfvkZZsFiV01xmI3WpTp86vcpQi2r8SgcsXSXpAhP35R3dK6gx-fdpGBms5FOpwiWE65MDiatQvURLIu74VZxNd6v0kcSImdn94tmcXGT2OO86qZSU2cqyWjjr-CY3nqNQscskzEIAxzpHZ48XCYY7wccNwZ0v4ehmEAHf1bNeD9Klwwa5samTjs_F5utu_lCmW7C5y6y7DkyJ-EZtun6tSOHw4S3DNO" 
                        alt="Portrait" 
                        className="hero-image-actual grayscale-hover"
                    />
                </div>
            </section>

            {/* 2. Political Career & Milestones */}
            <section className="political-career">
                <div className="career-header">
                    <h2>Year-Wise Political Journey</h2>
                    <h3>राजकीय कारकीर्द</h3>
                    <p>A comprehensive timeline from grassroots activism to state-level leadership</p>
                </div>

                <div className="career-timeline">
                    {/* Phase 1: Early Ground Work */}
                    <div className="career-phase">
                        <div className="phase-title">
                            <h3>Early Ground Work</h3>
                            <span className="phase-period">(Pre-1999)</span>
                        </div>
                        <div className="phase-items">
                            <div className="career-item">
                                <p>Active Shiv Sena worker in Dharangaon and nearby rural areas, building strong grassroots networks in Jalgaon district. Established local recognition before entering state politics.</p>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2: Electoral & Growth Phase */}
                    <div className="career-phase">
                        <div className="phase-title">
                            <h3>Electoral & Growth Phase</h3>
                            <span className="phase-period">(1999–2009)</span>
                        </div>
                        <div className="phase-items">
                            <div className="career-item">
                                <span className="year-tag">1999</span>
                                <div className="item-content">
                                    <h4>First elected as MLA from Erandol constituency</h4>
                                    <p>Entry into Maharashtra Legislative Assembly</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="year-tag">2000–2003</span>
                                <div className="item-content">
                                    <h4>Strengthened local base in Dharangaon–Erandol belt</h4>
                                    <p>Built image as accessible regional leader</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="year-tag">2004</span>
                                <div className="item-content">
                                    <h4>Re-elected as MLA (Erandol)</h4>
                                    <p>Became stronger within Shiv Sena hierarchy</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="year-tag">2005–2008</span>
                                <div className="item-content">
                                    <h4>Constituency Development & Party Expansion</h4>
                                    <p>Focus on constituency-level development and expansion in North Maharashtra</p>
                                </div>
                            </div>
                            <div className="career-item setback">
                                <span className="year-tag">2009</span>
                                <div className="item-content">
                                    <h4>Lost Assembly election</h4>
                                    <p>Faced political setback but remained active in party organization</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3: Comeback & Power Entry */}
                    <div className="career-phase">
                        <div className="phase-title">
                            <h3>Comeback & Power Entry</h3>
                            <span className="phase-period">(2010–2016)</span>
                        </div>
                        <div className="phase-items">
                            <div className="career-item">
                                <span className="year-tag">2010–2013</span>
                                <div className="item-content">
                                    <h4>Rebuilt political network</h4>
                                    <p>Strengthened hold in rural vote bank after previous defeat</p>
                                </div>
                            </div>
                            <div className="career-item highlight">
                                <span className="year-tag highlight">2014</span>
                                <div className="item-content">
                                    <h4>Won again as MLA (Erandol)</h4>
                                    <p>Shiv Sena entered power in Maharashtra coalition with BJP</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="year-tag">2015–2016</span>
                                <div className="item-content">
                                    <h4>Recognized within party leadership</h4>
                                    <p>Acknowledged for loyalty and strong ground strength</p>
                                </div>
                            </div>
                            <div className="career-item highlight">
                                <span className="year-tag highlight">2016</span>
                                <div className="item-content">
                                    <h4>Minister of State (Co-operation)</h4>
                                    <p>First ministerial position in Maharashtra government</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 4: Rise to Cabinet Level */}
                    <div className="career-phase">
                        <div className="phase-title">
                            <h3>Rise to Cabinet Level</h3>
                            <span className="phase-period">(2017–2019)</span>
                        </div>
                        <div className="phase-items">
                            <div className="career-item">
                                <span className="year-tag">2017–2018</span>
                                <div className="item-content">
                                    <h4>Continued ministerial role</h4>
                                    <p>Expanded administrative experience and ground influence</p>
                                </div>
                            </div>
                            <div className="career-item highlight">
                                <span className="year-tag highlight">2019</span>
                                <div className="item-content">
                                    <h4>Cabinet Minister – Water Supply & Sanitation</h4>
                                    <p>Won from Jalgaon Rural constituency with strong mandate</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 5: Turning Point */}
                    <div className="career-phase">
                        <div className="phase-title">
                            <h3>Turning Point – Major Political Shift</h3>
                            <span className="phase-period">(2020–2022)</span>
                        </div>
                        <div className="phase-items">
                            <div className="career-item">
                                <span className="year-tag">2020–2021</span>
                                <div className="item-content">
                                    <h4>Active minister in Uddhav Thackeray-led government</h4>
                                    <p>Maintained strong regional control in Jalgaon district</p>
                                </div>
                            </div>
                            <div className="career-item highlight critical">
                                <span className="year-tag highlight">2022</span>
                                <div className="item-content">
                                    <h4>Maharashtra political transition</h4>
                                    <p>Key participant in political shift • Joined Eknath Shinde faction • Government restructured</p>
                                </div>
                            </div>
                            <div className="career-item highlight">
                                <span className="year-tag highlight">Late 2022</span>
                                <div className="item-content">
                                    <h4>Retained Cabinet position</h4>
                                    <p>Continued as Cabinet Minister in new Shinde-led government</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 6: Consolidation Phase */}
                    <div className="career-phase">
                        <div className="phase-title">
                            <h3>Consolidation Phase</h3>
                            <span className="phase-period">(2023–Present)</span>
                        </div>
                        <div className="phase-items">
                            <div className="career-item">
                                <span className="year-tag">2023</span>
                                <div className="item-content">
                                    <h4>Continued Cabinet role</h4>
                                    <p>Focus on rural water and sanitation schemes across Maharashtra</p>
                                </div>
                            </div>
                            <div className="career-item highlight">
                                <span className="year-tag highlight">2024–Present</span>
                                <div className="item-content">
                                    <h4>Active state-level leader</h4>
                                    <p>Strong figure in Shinde-led Shiv Sena • Regional power leader in Jalgaon district</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Timeline Section */}
            <section className="timeline-section">
                <div className="section-header-center">
                    <h2>महत्त्वाचे टप्पे</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="timeline-wrapper">
                    <div className="timeline-line"></div>

                    {/* Timeline Item 1 - Left */}
                    <div className="timeline-item left">
                        <div className="timeline-circle bg-saffron-light"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-year text-saffron-light">१९९५</h3>
                            <h4 className="timeline-heading">प्रवासाची सुरुवात</h4>
                            <p>शिवसेनेच्या माध्यमातून सामाजिक कार्यात सक्रिय सहभाग आणि जनसंपर्क वाढवण्यास सुरुवात.</p>
                        </div>
                        <div className="timeline-img-box">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgoMGQM36lma1N81yI16pwWKOQifu5g8eoZaHJxiY2uelAZajKahe6CWLtW2aoB2Mwm_0PWjAC_HsFfflzd122tsXCoUx2djWLOUYDtYdqBaysrARJPBjAvOJWBf-LrgsIZ0yf0ihjSkG78K8sVgTnaOMvL366L1Y_I3JxSXzKNwOrF_nmOGNNPDk9QumaEN2gQvhlVpKDgBFl2WljWfYnkwOtS4dAIsbH0Cn27DjrwpTH00EGktESK65_uqpXwUN63KzK75xyWrwT" alt="1995" className="timeline-img-actual" />
                        </div>
                    </div>

                    {/* Timeline Item 2 - Right */}
                    <div className="timeline-item right">
                        <div className="timeline-circle bg-blue"></div>
                        <div className="timeline-img-box">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWwrlConitPwpwm1P9U3DP-QWT38i38h2m7k7KDA7kmpIzqhepgWRIJMYpHqde7q3fJGYafPtIc4_B7ErZXqJYm_nCQAXczZOAZeCpOwyybScgU27gOJNbrAsUMjAneLbC4LIqIHPJtCFHwt-AUbE041vgU6JGVcUmq55bn3clxyq2vBXZGL0QITBq33leADUvsw_b0goC_g1rztl54Yl-GNsdFj1idEjGnCIAhSeENmEWEpEKqjCRaYGM77OFcEjpplG7WORGTJAI" alt="2004" className="timeline-img-actual" />
                        </div>
                        <div className="timeline-content">
                            <h3 className="timeline-year text-saffron-light">२००४</h3>
                            <h4 className="timeline-heading">पहिली मोठी जबाबदारी</h4>
                            <p>मतदारसंघात महत्त्वाची पदे भूषवून पायाभूत सुविधांच्या विकासावर भर दिला.</p>
                        </div>
                    </div>

                    {/* Timeline Item 3 - Left */}
                    <div className="timeline-item left">
                        <div className="timeline-circle bg-saffron-dark"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-year text-saffron-light">२०१४</h3>
                            <h4 className="timeline-heading">विधानसभेत प्रतिनिधित्व</h4>
                            <p>विधीमंडळात जनतेचे प्रश्न मांडून विविध लोकोपयोगी योजना मंजूर करून घेतल्या.</p>
                        </div>
                        <div className="timeline-img-box">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDItpAK4zGNyvtMEZNgs9bNd97ofIMFI2gbm1P5NzcI7IaNMO8Y2YOdz4Vgt5JXnmHB8dKNFwc5X_ox6Yr5pZ0KXZoKODiL1mfPPGwXS6hyau5l5IsByvbS76ik-Id4ifqket6IlIrldviz-CMZOz3H8RGEe-Ofsvc55Ns7a-lBPTy84n-ig8WWT7bZ-fGJtAKwioRtO5MYkfxyeBxNy7t86jyVcsRfhDTOfFRmVKZbrXBhvEaclGDJwvyV9AQQUcu-27-mIsFxnM2K" alt="2014" className="timeline-img-actual" />
                        </div>
                    </div>

                    {/* Timeline Item 4 - Right */}
                    <div className="timeline-item right">
                        <div className="timeline-circle bg-blue"></div>
                        <div className="timeline-img-box">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEfnwqrGL6HrwYJstfPbNJirLPJzkwQJCBeuzSAkZ8LOhcbXf46BeJoE7r732_rfG5SMYs_8WU-sZL6_XlS2yBYpMHt70m78khuj8j5WdoT0ioqkZ3nqg2V9mI3pM_ssmXJfcS11N-8O_hB8NgPyBfoQMvPTHWPicxoMru54wZe6FIcZnxUsm915JC-KmS6JTkscSYRHBLtzoL1D0rE5TIeFWDC7EWHGOYXnMZUl9wtyR5oOgl5fu_3qY1mUrSFJ2iocT8_GOYQ5SW" alt="2024" className="timeline-img-actual" />
                        </div>
                        <div className="timeline-content">
                            <h3 className="timeline-year text-saffron-light">२०२४</h3>
                            <h4 className="timeline-heading">नवे संकल्प</h4>
                            <p>युवाशक्ती आणि तंत्रज्ञानाचा वापर करून आधुनिक महाराष्ट्राच्या निर्मितीसाठी कटिबद्ध.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Key Achievements */}
            <section className="achievements-section">
                <div className="achievements-header">
                    <h2>मुख्य यश आणि कृतित्व</h2>
                    <p>काही विशेष कार्ये ज्यांनी जनजीवनात सकारात्मक बदल घडवला.</p>
                </div>

                <div className="achievements-grid">
                    <div className="achieve-card">
                        <div className="achieve-icon-wrap">
                            <Droplet size={24} className="text-saffron-dark" />
                        </div>
                        <h3>जलयुक्त शिवार प्रकल्प</h3>
                        <p>कोरड्या पडलेल्या ५० पेक्षा जास्त गावांना पाण्याचे वरदान मिळाले आणि शेती उत्पादनात वाढ झाली.</p>
                    </div>
                    
                    <div className="achieve-card">
                        <div className="achieve-icon-wrap">
                            <GraduationCap size={24} className="text-blue" />
                        </div>
                        <h3>डिजिटल शिक्षण क्रांती</h3>
                        <p>ग्रामीण भागातील शाळांमध्ये आधुनिक तंत्रज्ञान आणि संगणक प्रयोगशाळांची यशस्वी उभारणी.</p>
                    </div>

                    <div className="achieve-card">
                        <div className="achieve-icon-wrap">
                            <Shield size={24} className="text-red" />
                        </div>
                        <h3>आरोग्य सेवा विस्तार</h3>
                        <p>जिल्ह्यात ३ नवीन फिरते दवाखाने आणि मोफत आरोग्य तपासणी शिबिरांचे नियमित आयोजन.</p>
                    </div>
                </div>
            </section>

            {/* 4. Vision Section */}
            <section className="vision-section">
                <div className="vision-wrapper">
                    <div className="vision-image">
                       <img 
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3BBkMxmda6jlrx_N04wFj-kYptsjgS1tK7NELew58WVLNLlRHrsyijcKENWM0UoggZznpprTGMU50zctZgxWRGlEx9ygzYJMmy2PO4UxgnQOd2DFZLC8glMHM4nvzVvmZX71Uqy5BJ3C84VufVARBJwmOp5Drd44DZxQgrSKzw8WCU92_1jmqsPsARcCgWB-q7Uh7wKfB7EclAIOPToKGTo3Ta36xicK4_oz2-PeJ4ccdSug1ueKoXdP9sihG__-2OnK7Cp-rh-aq" 
                           alt="Vision" 
                           className="vision-img-actual" 
                       />
                    </div>
                    <div className="vision-text">
                        <h2>माझा दृष्टिकोन: <br/>
                            <span className="text-saffron-500">जनकल्याणाचा विचार</span>
                        </h2>
                        <p>
                            राजकारण हे केवळ सत्तेचे साधन नसून ते समाजसेवेचे एक व्यापक माध्यम आहे, असे मी मानतो. 
                            माझ्या प्रवासाच्या पहिल्या दिवसापासून मी सामान्य माणसाच्या प्रश्नांशी जोडला गेलो आहे.
                        </p>
                        <p>
                            तळागाळातील कार्यकर्त्यांपासून ते वरिष्ठ नेतृत्वापर्यंत मिळालेली साथ हीच माझी खरी ताकद आहे. 
                            प्रत्येक व्यक्तीला न्याय मिळावा आणि प्रत्येक हाताला काम मिळावे, यासाठी मी निरंतर प्रयत्नशील असेन.
                        </p>
                        <p className="vision-highlight">
                            <strong>सामाजिक न्याय आणि समतोल विकास हेच माझ्या वाटचालीचे दिशादर्शक आहेत.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Journey CTA */}
            <section className="journey-cta">
                <div className="cta-content">
                    <h2>चला, नव्या महाराष्ट्रासाठी सोबत येऊया!</h2>
                    <p>
                        विचारांनी जोडूया, कार्याने सिद्ध करूया. शिवसेनेच्या या प्रवासात आपले सहकार्य आणि आशीर्वाद हीच आमची खरी प्रेरणा आहे.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-white-solid">सभेला उपस्थित राहा</button>
                        <button className="btn-outline-white">सभासद व्हा</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Journey;
