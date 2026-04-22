import React from 'react';
import { MapPin, Mail, Phone, ExternalLink, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="simple-contact-container padding-section">
            <div className="max-width-container">
                
                {/* Header Info */}
                <div className="contact-header-simple">
                    <h1 className="font-black text-4xl text-dark mb-4">संपर्क आणि तक्रार निवारण (Contact Us)</h1>
                    <p className="text-gray text-lg max-w-2xl">
                        तुमचा आवाज आमच्यापर्यंत पोहोचवा. आम्ही तुमच्या समस्यांचे निराकरण करण्यासाठी सदैव तत्पर आहोत.
                    </p>
                </div>

                <div className="simple-contact-grid pt-12">
                    
                    {/* Left: Contact Info */}
                    <div className="simple-contact-info">
                        <div className="info-card shadow-sm border-top-primary">
                            <h3 className="font-bold text-2xl mb-6 text-dark">कार्यालय (Office)</h3>
                            
                            <div className="flex gap-4 mb-6">
                                <div className="icon-wrap bg-primary-light text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">पत्ता (Address)</h4>
                                    <p className="text-gray">मातोश्री, कलानगर,<br/>वांद्रे (पूर्व), मुंबई ४०००५१</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-6">
                                <div className="icon-wrap bg-primary-light text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">फोन (Phone)</h4>
                                    <p className="text-gray">+९१-२२-१२३४-५६७८</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-8">
                                <div className="icon-wrap bg-primary-light text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">ईमेल (Email)</h4>
                                    <p className="text-gray">contact@shivsenavanguard.org</p>
                                </div>
                            </div>

                            <hr className="divider" />
                            
                            <h4 className="font-bold text-dark mt-6 mb-4">सोशल मीडिया (Follow Us)</h4>
                            <div className="flex gap-4">
                                <a href="#" className="simple-social-link">Facebook</a>
                                <a href="#" className="simple-social-link">Twitter</a>
                                <a href="#" className="simple-social-link">Instagram</a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="simple-contact-form bg-white shadow-sm rounded border-top-secondary">
                        <h3 className="font-bold text-2xl mb-2 text-dark">तक्रार नोंदवा (Leave a Message)</h3>
                        <p className="text-gray text-sm mb-6 pb-4 border-b">Fill out the form below to register your grievance securely.</p>
                        
                        <form className="simple-form-layout">
                            <div className="form-group row-span flex gap-4">
                                <div className="flex-1">
                                    <label className="simple-label">पूर्ण नाव (Name) *</label>
                                    <input type="text" className="simple-input" placeholder="Enter your name" required />
                                </div>
                                <div className="flex-1">
                                    <label className="simple-label">फोन नंबर (Phone) *</label>
                                    <input type="tel" className="simple-input" placeholder="+91" required />
                                </div>
                            </div>

                            <div className="form-group row-span flex gap-4">
                                <div className="flex-1">
                                    <label className="simple-label">मतदारसंघ (Constituency)</label>
                                    <select className="simple-input">
                                        <option>Select</option>
                                        <option>मुंबई उत्तर</option>
                                        <option>पुणे शहर</option>
                                        <option>इतर (Other)</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label className="simple-label">प्रकार (Category) *</label>
                                    <select className="simple-input" required>
                                        <option>Select Category</option>
                                        <option>पाणी (Water)</option>
                                        <option>रस्ते (Roads)</option>
                                        <option>आरोग्य (Health)</option>
                                        <option>इतर</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group row-span">
                                <label className="simple-label">तक्रार / संदेश (Message) *</label>
                                <textarea className="simple-input" rows={5} placeholder="Describe your grievance or message here..." required></textarea>
                            </div>

                            <div className="form-group mt-4">
                                <button type="submit" className="btn-simple-submit flex items-center gap-2">
                                    तक्रार पाठवा (Submit) <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
