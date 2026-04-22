import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-title">Gulabrao Patil</h3>
                        <p className="footer-desc">
                            Minister for Water Supply and Sanitation, Maharashtra State.
                            Dedicated to serving the people of Jalgaon Rural.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul>
                            <li><a href="/about">{t('nav.about')}</a></li>
                            <li><a href="/work">{t('nav.work')}</a></li>
                            <li><a href="/news">{t('nav.news')}</a></li>
                            <li><a href="/contact">{t('nav.contact')}</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-subtitle">Contact</h4>
                        <div className="contact-item">
                            <MapPin size={18} className="contact-icon" />
                            <span>Office Address, Jalgaon, Maharashtra</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="contact-icon" />
                            <span>+91 XXXXX XXXXX</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} className="contact-icon" />
                            <span>contact@gulabraopatil.in</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Gulabrao Patil. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
