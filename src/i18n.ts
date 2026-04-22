import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const en = {
    translation: {
        nav: {
            home: "Home",
            about: "About",
            journey: "Political Journey",
            portfolio: "Responsibilities",
            work: "Work & Achievements",
            news: "News / Updates",
            myView: "My View",
            gallery: "Gallery",
            contact: "Contact"
        },
        hero: {
            title: "Gulabrao Raghunath Patil",
            subtitle: "Minister for Water Supply and Sanitation, Maharashtra",
            tagline: "Dedicated to the development and prosperity of Jalgaon Rural and Maharashtra.",
            cta: "Watch Latest Speech"
        },
        floating: {
            grievance: "Submit Grievance",
            instagram: "Follow on Instagram"
        },
        timeline: {
            title: "JOURNEY"
        }
    }
};

// Marathi translations
const mr = {
    translation: {
        nav: {
            home: "मुख्यपृष्ठ",
            about: "माझ्याबद्दल",
            journey: "राजकीय प्रवास",
            portfolio: "जबाबदाऱ्या",
            work: "कामे आणि उपलब्धी",
            news: "बातम्या / अपडेट्स",
            myView: "माझे विचार",
            gallery: "गॅलरी",
            contact: "संपर्क"
        },
        hero: {
            title: "गुलाबराव रघुनाथ पाटील",
            subtitle: "पाणीपुरवठा आणि स्वच्छता मंत्री, महाराष्ट्र राज्य",
            tagline: "जळगाव ग्रामीण आणि महाराष्ट्राच्या विकासासाठी आणि समृद्धीसाठी समर्पित.",
            cta: "नवीनतम भाषण पहा"
        },
        floating: {
            grievance: "तक्रार नोंदवा",
            instagram: "इंस्टाग्रामवर फॉलो करा"
        },
        timeline: {
            title: "प्रवास"
        }
    }
};

// Get language from localStorage or use default
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
const defaultLanguage = savedLanguage || 'mr';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en,
            mr
        },
        lng: defaultLanguage,
        fallbackLng: 'mr',
        interpolation: {
            escapeValue: false
        }
    });

// Save language to localStorage whenever it changes
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

export default i18n;
