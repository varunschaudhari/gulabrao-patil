import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './FloatingCTAs.css';

const FloatingCTAs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="floating-container">
            <a href="/contact" className="floating-btn grievance-btn">
                <MessageSquare size={20} />
                <span className="btn-text">{t('floating.grievance')}</span>
            </a>
            <a href="https://instagram.com/gulabraopatilofficial" target="_blank" rel="noopener noreferrer" className="floating-btn insta-btn">
                <Instagram size={20} />
                <span className="btn-text">{t('floating.instagram')}</span>
            </a>
        </div>
    );
};

export default FloatingCTAs;
