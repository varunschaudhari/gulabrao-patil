import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download, FileText, Image as ImageIcon, Twitter, Instagram, Send } from 'lucide-react';
import './News.css';

const News: React.FC = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("सर्व बातम्या");

    const categories = ["सर्व बातम्या", "प्रेस रिलीज", "मीडिया कव्हरेज", "सार्वजनिक कार्यक्रम", "घोषणा"];

    return (
        <div className="news-container">
            {/* 1. Hero News Section */}
            <section className="featured-news-section padding-section">
                <div className="max-width-container">
                    <div className="hero-news-card group shadow-2xl">
                        <div className="hero-news-img-box">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYO_w-EeNT-yjuZB6StJuaCeKUg09Vl3EV3kYcpC-H5wAarfbfce7uMy_Xz0Yvz1gR1BwmEI7mtGP26bOlJlGorTmdFMa2YeLFcRM7yONouGs6bHVd_gxMqlWtaiOR3eVKnv3wYHdR9y1CQod9FBuS1iEtZDe7_jV31K261Vv7WA_oyP4FqoruSDZ3ydwaTlQ8D3z6sXbKSDS3ayoBdooEfTUtw1Ca6Q3KY-FkR7DH-9s14vR3Cx8mtl_G9EPoRa7COAfZ78uLp3C6" 
                                alt="Featured News" 
                                className="hero-news-img group-hover-scale"
                            />
                        </div>
                        <div className="hero-news-content bg-white border-left-primary">
                            <div className="news-meta mb-6">
                                <span className="news-badge bg-primary text-white">ठळक बातमी</span>
                                <span className="news-date">१४ मे, २०२४</span>
                            </div>
                            <h1 className="hero-news-title text-dark">
                                महाराष्ट्राच्या प्रगतीसाठी नव्या योजनांचा शुभारंभ
                            </h1>
                            <p className="hero-news-desc">
                                राज्यातील तरुणांना रोजगाराच्या संधी उपलब्ध करून देण्यासाठी आणि ग्रामीण भागातील पायाभूत सुविधांच्या विकासासाठी शिवसेनेतर्फे नवीन उपक्रमांची घोषणा करण्यात आली.
                            </p>
                            <button className="btn-read-more bg-saffron-light text-dark mt-8">
                                अधिक वाचा <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Categories */}
            <section className="categories-section">
                <div className="max-width-container">
                    <div className="categories-wrapper border-bottom">
                        <span className="categories-label text-primary-color">श्रेणी:</span>
                        <div className="categories-list">
                            {categories.map(cat => (
                                <button 
                                    key={cat} 
                                    className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Main Content: Grid & Sidebar */}
            <section className="main-content-section padding-section">
                <div className="max-width-container news-main-layout">
                    
                    {/* Left: News Grid */}
                    <div className="news-grid-area">
                        <div className="news-grid mb-12">
                            {/* Card 1 */}
                            <div className="news-card group border-bottom-hover">
                                <div className="news-card-img-box relative">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJiNuf4yxWD6MN1qhe6BSdd0PCUq-OzZTcA-Zs5O8jnZcPmd-9zTSsLhhUwXon65j1EVt__AYLX9vHUvfyTLipneZMP8jgOIcUrcumr_-QqW_AIa3JFAQ_yigBp03xt75L-26P786JSCdEcltEXY1DYuSQx36x8F-e-SfuypQJudSmocZNcR1rMUOKRtDUrHe0k8bhA4RrzgU_Oh08s0YPagjZzlwiUfiBzr0zpEksiJfd-v0WMb7735RJEw0KP2IgoVcIvI48ibaC" 
                                        alt="News 1" 
                                        className="group-hover-scale"
                                    />
                                </div>
                                <div className="news-card-content">
                                    <div className="news-meta mb-3">
                                        <span className="news-tag text-primary-color">प्रेस रिलीज</span>
                                        <span className="news-date">१२ मे, २०२४</span>
                                    </div>
                                    <h3 className="news-card-title group-hover-text-primary">मुंबईतील आरोग्य सुविधांच्या विस्तारासाठी विशेष निधी मंजूर</h3>
                                    <a href="#" className="read-link text-secondary">
                                        पूर्ण बातमी <ArrowRight size={16} className="arrow-icon" />
                                    </a>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="news-card group border-bottom-hover">
                                <div className="news-card-img-box relative">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuANgCInP-G9dK0RyC6Bsv5yPN7_Z3WENfg8n4GoBsSFTvKHdgfybMHefASimvo3-HXQubZCsh97eFCkbEoWLXOr-0bwhtvczixkAOpL_yx9BPO-cFdGU8ZCSz4H6ZVtDXI2fYh-p_2bTN_12UmFRZCr-oG9GLZWlmnqK47fdwE0DahKUIG5p1KAtrti0PI5jJ_t1SuzRPN6VNFpnE3i-oAyb0RhX4Fdo5bv-d5poUfy1QcZ-aD9hhdbBDpexqAbLvVUoGQ3Xg37tc7W" 
                                        alt="News 2" 
                                        className="group-hover-scale"
                                    />
                                </div>
                                <div className="news-card-content">
                                    <div className="news-meta mb-3">
                                        <span className="news-tag text-primary-color">सार्वजनिक कार्यक्रम</span>
                                        <span className="news-date">१० मे, २०२४</span>
                                    </div>
                                    <h3 className="news-card-title group-hover-text-primary">लोकसंवाद: जनतेच्या तक्रारींचे निवारण करण्यासाठी विशेष उपक्रम</h3>
                                    <a href="#" className="read-link text-secondary">
                                        पूर्ण बातमी <ArrowRight size={16} className="arrow-icon" />
                                    </a>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="news-card group border-bottom-hover">
                                <div className="news-card-img-box relative">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-DXo6aBJo8ZBiVt_u8jlrXAPD6l_w_SaLQhp5uwJMNG38GUcJ-w9ObZE68p6XXr7cYIdydnIYO6TlVo95s90sNr-_Cq0SLUVu2-60TFg7NiMhjuAByqnCjgYaovceS8SkCtKJLFb7tR6yCWPC7pK7tSMXL5BJQewFOqYtehjtKVzyJC6aRQKBdKY2XLb6ZtXCUY7OtDODx5Sy7Zxq9nqpWtKCbMaLq5hMC1dNYi3u82OoQCfeGYY2GL9t_GMVWP3mWKjodq-QdSIc" 
                                        alt="News 3" 
                                        className="group-hover-scale"
                                    />
                                </div>
                                <div className="news-card-content">
                                    <div className="news-meta mb-3">
                                        <span className="news-tag text-primary-color">घोषणा</span>
                                        <span className="news-date">०८ मे, २०२४</span>
                                    </div>
                                    <h3 className="news-card-title group-hover-text-primary">शेतकऱ्यांसाठी कर्जमाफी आणि आधुनिक सिंचन प्रकल्पांची घोषणा</h3>
                                    <a href="#" className="read-link text-secondary">
                                        पूर्ण बातमी <ArrowRight size={16} className="arrow-icon" />
                                    </a>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="news-card group border-bottom-hover">
                                <div className="news-card-img-box relative">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj2bbPQJA0y0EiGzIBJfe72tlhT9MDiDlgYy0RTbcv_XNiFltWDBA6kgQQY-QCA_G4Tx3Fof7F8_lJ44gvctSXkFb6qTNgMHzfLxQl_5NJFHnCjAVVfWWIwC9ptLWo06UQ0qvq-uD-brXcgooBCDGa0a1RMXb262ZOBzMHuniLEH7v3-11SzVCMqTU267-yluBTBjvYWKOiclNOqEbZ05vW3xsWAHXmx7aKS4SHWGXsnIyFLgSDQSOU4s5GjKYe7oVPpuwF3OlE7E2" 
                                        alt="News 4" 
                                        className="group-hover-scale"
                                    />
                                </div>
                                <div className="news-card-content">
                                    <div className="news-meta mb-3">
                                        <span className="news-tag text-primary-color">मीडिया कव्हरेज</span>
                                        <span className="news-date">०५ मे, २०२४</span>
                                    </div>
                                    <h3 className="news-card-title group-hover-text-primary">'स्किल महाराष्ट्र' मोहिमेचा यशस्वी प्रारंभ: ५००० विद्यार्थ्यांना रोजगार</h3>
                                    <a href="#" className="read-link text-secondary">
                                        पूर्ण बातमी <ArrowRight size={16} className="arrow-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="load-more-wrap text-center">
                            <button className="btn-outline-primary">आणखी बातम्या पहा</button>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <aside className="sidebar-area">
                        {/* Press Kit */}
                        <div className="sidebar-widget bg-gray-light mb-8">
                            <h4 className="widget-title mb-6">
                                <Download size={24} className="text-primary-color" /> प्रेस किट / डाउनलोड
                            </h4>
                            <div className="widget-links">
                                <a href="#" className="download-item bg-white shadow-sm hover-shadow group">
                                    <div className="dl-info">
                                        <FileText size={20} className="text-red" />
                                        <span>वार्षिक अहवाल २०२३-२४</span>
                                    </div>
                                    <Download size={18} className="text-gray group-hover-text-primary" />
                                </a>
                                <a href="#" className="download-item bg-white shadow-sm hover-shadow group">
                                    <div className="dl-info">
                                        <FileText size={20} className="text-red" />
                                        <span>प्रेस रिलीज - मे २०२४</span>
                                    </div>
                                    <Download size={18} className="text-gray group-hover-text-primary" />
                                </a>
                                <a href="#" className="download-item bg-white shadow-sm hover-shadow group">
                                    <div className="dl-info">
                                        <ImageIcon size={20} className="text-secondary" />
                                        <span>उच्च दर्जाचे फोटो (Media)</span>
                                    </div>
                                    <Download size={18} className="text-gray group-hover-text-primary" />
                                </a>
                            </div>
                        </div>

                        {/* Social Feed */}
                        <div className="sidebar-widget bg-gray-lighter">
                            <h4 className="widget-title mb-6">सोशल मीडिया अपडेट्स</h4>
                            
                            <div className="social-cards block-y">
                                {/* X Card */}
                                <div className="social-card bg-white border-left-secondary shadow-sm p-4">
                                    <div className="sc-header mb-3">
                                        <div className="avatar bg-gray-light"></div>
                                        <div>
                                            <p className="sc-name">Shiv Sena Official</p>
                                            <p className="sc-handle">@ShivSena</p>
                                        </div>
                                    </div>
                                    <p className="sc-body mb-3 text-sm text-dark">
                                        महाराष्ट्राचा स्वाभिमान आणि जनतेचा आवाज! शिवसेनेतर्फे आयोजित करण्यात आलेल्या जनसंवाद सभेला उदंड प्रतिसाद. #ShivSena #Maharashtra
                                    </p>
                                    <p className="sc-time text-xs">2 hours ago</p>
                                </div>

                                {/* IG Card */}
                                <div className="social-card bg-white shadow-sm">
                                    <img 
                                        className="sc-img"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXRh9IwL7nEclki8oSg-_ZHicitDKn8reNphlv0gUS-BoRIMCa_kcKv_D1j1dQFB5cOA-iX4fMljrOOzvzn-Grjj_oAzOFbLf-Bb5lOBZliopeu0gkb6K0BgIAVLk_L_Go3HN_Zk7qpYJdZLFidU9oIn7PXxBPsydUniRL40-TChPogg6EeLpDZ4Ishg0lLPL_qY5I0Yu6VH3dceqKybU1wF9lWyo6b1U30XQKATHjScMvAHRKnIAZi3_6oD3e1o60k3NLhitLSUY1"
                                        alt="Rally"
                                    />
                                    <div className="p-4">
                                        <p className="text-xs font-medium text-dark">गर्जा महाराष्ट्र माझा! 🚩 #Swarajya #ShivSena</p>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="#" className="block-link text-center mt-6 text-secondary text-sm font-bold hover:underline">
                                सर्व सोशल पोस्ट पहा
                            </a>
                        </div>
                    </aside>
                </div>
            </section>

            {/* 4. Newsletter */}
            <section className="newsletter-section bg-saffron-light">
                <div className="max-width-container newsletter-wrapper">
                    <h2 className="newsletter-title text-dark">आमच्याशी जोडले रहा</h2>
                    <p className="newsletter-desc text-dark">
                        ताज्या बातम्या आणि महत्त्वाच्या अपडेट्स थेट तुमच्या ईमेलवर मिळवण्यासाठी आजच नोंदणी करा.
                    </p>
                    <form className="newsletter-form">
                        <input 
                            type="email" 
                            className="newsletter-input bg-white text-dark" 
                            placeholder="तुमचा ईमेल पत्ता लिहा" 
                        />
                        <button type="button" className="btn-solid-secondary text-white">
                            सबस्क्राईब करा
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default News;
