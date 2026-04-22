import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Load language from localStorage on mount
        const savedLang = localStorage.getItem('language');
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        // Close language menu when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.lang-dropdown')) {
                setLangMenuOpen(false);
            }
        };

        if (langMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [langMenuOpen]);

    const toggleLang = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setLangMenuOpen(false);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.journey'), path: '/journey' },
        { name: t('nav.portfolio'), path: '/portfolio' },
        { name: t('nav.work'), path: '/work' },
        { name: t('nav.news'), path: '/news' },
        { name: t('nav.myView'), path: '/my-view' },
        { name: t('nav.gallery'), path: '/gallery' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo Section */}
                <div className="navbar-brand">
                    <div className="logo-placeholder">SS</div>
                    <span className="brand-name">Gulabrao Patil</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link, idx) => (
                        <NavLink
                            key={idx}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* Language Toggle */}
                    <div className="lang-dropdown">
                        <button className="lang-btn" onClick={() => setLangMenuOpen(!langMenuOpen)}>
                            <Globe size={18} />
                            <span>{i18n.language.toUpperCase()}</span>
                            <ChevronDown size={14} />
                        </button>
                        {langMenuOpen && (
                            <div className="lang-menu">
                                <button onClick={() => toggleLang('en')}>English</button>
                                <button onClick={() => toggleLang('mr')}>मराठी</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle">
                    {/* Mobile Language Dropdown */}
                    <div className="lang-dropdown mobile-lang">
                        <button className="lang-btn" onClick={() => setLangMenuOpen(!langMenuOpen)}>
                            <Globe size={18} />
                            <span>{i18n.language.toUpperCase()}</span>
                        </button>
                        {langMenuOpen && (
                            <div className="lang-menu">
                                <button onClick={() => toggleLang('en')}>English</button>
                                <button onClick={() => toggleLang('mr')}>मराठी</button>
                            </div>
                        )}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="mobile-menu-panel">
                    {navLinks.map((link, idx) => (
                        <NavLink
                            key={idx}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
