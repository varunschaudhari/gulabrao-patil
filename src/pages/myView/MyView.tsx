import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Clock, Calendar, Mail, Search, Filter } from 'lucide-react';
import './MyView.css';

interface Article {
    id: number;
    title: string;
    titleMr: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: number;
    image: string;
    author: string;
}

const MyView: React.FC = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const articles: Article[] = [
        {
            id: 1,
            title: "Maharashtra's Identity: A New Path to Progress",
            titleMr: "महाराष्ट्राच्या अस्मितेचा लढा: प्रगतीचा नवा मार्ग",
            excerpt: "The fight for Maharashtra's pride is not just political; it's a social revolution. Our vision for an inclusive, technologically advanced, and culturally rich state.",
            category: "Vision",
            date: "Nov 14, 2024",
            readTime: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVYgIUFsV7xrYsRTQpuQN7V4Bs2UQgi2sp047TL_jP4OJUU_ipU8I75FsH8A2W8D2A6JTUoGKx8fZJzi4n9p2JuLdQaKK2EB_lEuiU4gggLGJgwrohEVxUiCYBPaeV0pu9hi71LZo9QE6Hr3YOD28_LZFNOJfJQfuz_jNMNQdXFis9hMGBXx7x2HdR7XuEbSN49-kFevAWQ_nlPdPUBmJxkzPozUSR5XU2D7ahJVJ6Mrw1Saff4tFGB8qoEgyQme16PbU7pCw4Imoy",
            author: "Gulabrao Patil"
        },
        {
            id: 2,
            title: "Farmer Empowerment: Digital Revolution in Agriculture",
            titleMr: "शेतकऱ्यांचे सक्षमीकरण: कृषी क्षेत्रातील डिजिटल क्रांती",
            excerpt: "Empowering farmers with digital tools is the cornerstone of sustainable growth. How technology is transforming rural Maharashtra.",
            category: "Development",
            date: "Nov 7, 2024",
            readTime: 6,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkNDSSMxcssFoQ_-3612jrUEn5EdMzYxsZW4GIBH9NSgpSnoA5URDsobC9YfUye93dw9NGpNv0kukZxR4F8jbb_sCua0RPVnnbs4E1kRVMaWL9Urzdw42lli49nsjY3UBHucb3akV5PCAsWcei-PqsXp7rOYN2cmlyjaxzzD1IH2M_v-GFe9oEYwapOMZIYiJvV0JCfvn7SC5ZXA2LwwHP9Nlux8lB3QaOQqbcVxJaKswBEb-3deZD_0kZqCUdgyZJbl_V5_boUXJf",
            author: "Gulabrao Patil"
        },
        {
            id: 3,
            title: "Infrastructure Transformation in Mumbai",
            titleMr: "मुंबईतील पायाभूत सुविधांचा कायापालट",
            excerpt: "Redefining Mumbai's infrastructure for the next century of growth. A comprehensive look at urban development and mobility solutions.",
            category: "Infrastructure",
            date: "Oct 28, 2024",
            readTime: 7,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuRu0hVKrF9245Q5uF7eIF_sfx2DCDItbDmhHB9j9ipTVsRrJj5FXweljMf066qF6vf5EPwztqt1oKaHw5ZfHNjg15Wn24wERZjy7EYMmo3Hma1U4YHU7m4vMw1mLDhrMwwWtFC-QkTtobCnFZE06Caj07RS57aVFjEH5QkQuz0DbrvAQleYRR1_B-QLSz-xyArPAo4wFNDXtUBU0bfJCWwWwhmJ5Tiwa5VD_FQqcR6s-uBb110Hh3ok5O8gP92JN91IaltLV_do_P",
            author: "Gulabrao Patil"
        },
        {
            id: 4,
            title: "Environmental Protection: Sahyadri Conservation",
            titleMr: "सह्याद्रीचे रक्षण: पर्यावरणाचे संवर्धन",
            excerpt: "Commitment to preserving our natural heritage. Eco-friendly initiatives and climate action strategies for sustainable Maharashtra.",
            category: "Environment",
            date: "Oct 15, 2024",
            readTime: 5,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnsQ1Vkga3nT_0c2FcPztqvckLIuf6ZysDHrCl64KOCoMXmOh-vUvpCts5Vlhp0y2KmMLYgE3z8fs8G_UopLp8iOE9RHXWScEBTNifoL-mzTE_0tWMSUVd3GhBLIRGGT36E1ggZoZ9GkNaSSKaVmwbX1LxEp3uCNDwYxV_m-ZOK9DTfYILne63RSDGgj1qqUFBBJYXiifdlKlXrqDtyOT16NPeqVWpR5Vr3Q5qlJhJpQlzZU2iivLhmDVAnZMuEAVWx4vSijjZWGJE",
            author: "Gulabrao Patil"
        },
        {
            id: 5,
            title: "Water Resources & Sustainable Development",
            titleMr: "जलसंपदा आणि टिकाऊ विकास",
            excerpt: "Strategic approach to water conservation and sanitation. Building a water-secure Maharashtra for future generations.",
            category: "Development",
            date: "Oct 8, 2024",
            readTime: 8,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVYgIUFsV7xrYsRTQpuQN7V4Bs2UQgi2sp047TL_jP4OJUU_ipU8I75FsH8A2W8D2A6JTUoGKx8fZJzi4n9p2JuLdQaKK2EB_lEuiU4gggLGJgwrohEVxUiCYBPaeV0pu9hi71LZo9QE6Hr3YOD28_LZFNOJfJQfuz_jNMNQdXFis9hMGBXx7x2HdR7XuEbSN49-kFevAWQ_nlPdPUBmJxkzPozUSR5XU2D7ahJVJ6Mrw1Saff4tFGB8qoEgyQme16PbU7pCw4Imoy",
            author: "Gulabrao Patil"
        },
        {
            id: 6,
            title: "Youth Empowerment & Digital Skills",
            titleMr: "तरुणांचे सक्षमीकरण आणि डिजिटल कौशल्य",
            excerpt: "Investing in the next generation with technology and skill development programs. Creating opportunities for youth-led growth.",
            category: "Vision",
            date: "Sep 30, 2024",
            readTime: 6,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuRu0hVKrF9245Q5uF7eIF_sfx2DCDItbDmhHB9j9ipTVsRrJj5FXweljMf066qF6vf5EPwztqt1oKaHw5ZfHNjg15Wn24wERZjy7EYMmo3Hma1U4YHU7m4vMw1mLDhrMwwWtFC-QkTtobCnFZE06Caj07RS57aVFjEH5QkQuz0DbrvAQleYRR1_B-QLSz-xyArPAo4wFNDXtUBU0bfJCWwWwhmJ5Tiwa5VD_FQqcR6s-uBb110Hh3ok5O8gP92JN91IaltLV_do_P",
            author: "Gulabrao Patil"
        }
    ];

    const categories = ['all', 'Vision', 'Development', 'Infrastructure', 'Environment'];

    const filteredArticles = selectedCategory === 'all'
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    const featuredArticle = articles[0];

    return (
        <div className="myview-container">
            {/* Hero Header */}
            <section className="myview-hero">
                <div className="hero-content">
                    <span className="hero-badge">विचार आणि दृष्टिकोण</span>
                    <h1>My Thoughts</h1>
                    <h2>राजकीय विचार, सामाजिक दृष्टिकोण</h2>
                    <p>Exploring ideas, sharing vision, and discussing strategic roadmap for Maharashtra's progress and prosperity</p>
                </div>
            </section>

            {/* Featured Article */}
            <section className="featured-section">
                <div className="featured-card">
                    <div className="featured-image">
                        <img src={featuredArticle.image} alt={featuredArticle.title} />
                        <div className="featured-overlay"></div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-meta">
                            <span className="featured-badge">Featured</span>
                            <span className="featured-date">
                                <Calendar size={14} /> {featuredArticle.date}
                            </span>
                            <span className="featured-read">
                                <Clock size={14} /> {featuredArticle.readTime} min read
                            </span>
                        </div>
                        <h2>{featuredArticle.titleMr}</h2>
                        <p>{featuredArticle.excerpt}</p>
                        <button className="read-button">
                            Read Full Article
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Filter & Search */}
            <section className="articles-section">
                <div className="section-header">
                    <div>
                        <h2>Latest Articles</h2>
                        <p>Thoughts, insights, and perspectives on Maharashtra's future</p>
                    </div>
                    <div className="search-box">
                        <Search size={18} />
                        <input type="text" placeholder="Search articles..." />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    <Filter size={16} />
                    <div className="filter-buttons">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category === 'all' ? 'All Articles' : category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="articles-grid">
                    {filteredArticles.map(article => (
                        <article key={article.id} className="article-card">
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                                <span className="article-category">{article.category}</span>
                            </div>
                            <div className="article-body">
                                <div className="article-meta">
                                    <span className="meta-date">
                                        <Calendar size={14} /> {article.date}
                                    </span>
                                    <span className="meta-time">
                                        <Clock size={14} /> {article.readTime} min
                                    </span>
                                </div>
                                <h3>{article.titleMr}</h3>
                                <p>{article.excerpt}</p>
                                <div className="article-footer">
                                    <span className="author">By {article.author}</span>
                                    <button className="article-link">
                                        Read More
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="newsletter-section">
                <div className="newsletter-content">
                    <div className="newsletter-text">
                        <h2>स्वराज्य विचार: साप्ताहिकी</h2>
                        <p>Subscribe to receive personal letters and weekly updates directly from the leader on Maharashtra's progress and vision.</p>
                    </div>
                    <form className="newsletter-form">
                        <div className="form-wrapper">
                            <Mail size={18} />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default MyView;
