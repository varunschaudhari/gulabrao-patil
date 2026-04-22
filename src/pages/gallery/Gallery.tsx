import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Image as ImageIcon, ChevronDown } from 'lucide-react';
import './Gallery.css';

const Gallery: React.FC = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('All');

    return (
        <div className="gallery-container">
            {/* 1. Hero Section */}
            <section className="gallery-hero bg-surface text-dark padding-section">
                <div className="max-width-container flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
                    <div>
                        <h1 className="font-black text-5xl md:text-7xl tracking-tight uppercase leading-none mb-4">
                            छायाचित्र <span className="text-primary-color italic">दालन</span>
                        </h1>
                        <p className="text-secondary font-bold tracking-wide uppercase text-lg">The Modern Vanguard Gallery</p>
                    </div>

                    <div className="filter-tabs bg-surface-container">
                        <button 
                            className={`filter-btn ${filter === 'All' ? 'active shadow-sm' : ''}`}
                            onClick={() => setFilter('All')}
                        >All</button>
                        <button 
                            className={`filter-btn ${filter === 'Photos' ? 'active shadow-sm' : ''}`}
                            onClick={() => setFilter('Photos')}
                        >Photos</button>
                        <button 
                            className={`filter-btn ${filter === 'Videos' ? 'active shadow-sm' : ''}`}
                            onClick={() => setFilter('Videos')}
                        >Videos</button>
                    </div>
                </div>
            </section>

            {/* 2. Featured Albums */}
            <section className="featured-albums padding-section pb-8 max-width-container">
                <div className="flex items-baseline gap-4 mb-8">
                    <h2 className="font-extrabold text-3xl text-dark">संग्रहित अल्बम</h2>
                    <div className="h-line grow bg-gray-lighter"></div>
                    <span className="text-primary-color font-bold text-sm uppercase">Album View</span>
                </div>

                <div className="albums-grid">
                    {/* Large Album Card */}
                    <div className="album-card large-card relative group overflow-hidden bg-dark">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEf6Fyr1nbejMmHR8Cjh5mhj46yNcMPsGL0Wov82RdQeXIsH-6Gl3kaslQ6x1F1PsSRPRDHY-rQKgNzBuVV0z-n1gWbi1LEDLrJfuvOPePSiqge_6n2ldWE0UPDytjldG-erenAfvVDCXfnxJcCfoN-4A4weKCwnVBhVsK_2oCKhfk1GCW8dmPBmsQpV5ODD_8YGdq2Mgti1ESOgFGV8MhxPInnK1KOrQo3ghQXtKIOE53HivjoJiGQU6g9YdRLolD8MBipfj618MZ" 
                            alt="Mega Rally" 
                            className="album-img" 
                        />
                        <div className="album-overlay gradient-dark"></div>
                        <div className="album-content bottom-left p-8">
                            <span className="album-badge">Featured</span>
                            <h3 className="album-title text-white">महा विजय रॅली २०२४<br/><span className="text-lg font-medium">Mega Victory Rally 2024</span></h3>
                            <p className="album-meta text-gray-light">४५ फोटो • १२ व्हिडिओ</p>
                        </div>
                    </div>

                    {/* Medium Card */}
                    <div className="album-card medium-card relative group overflow-hidden bg-dark">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOG9Fy0mMFk4lpJDdciawj8_q0UCNJ75IJT69xl01eltDVVmYMG2KCbyD-Cpsg0aDCTGPvy87S-uJKT-heE8fVX-UgYiGd59HuLQ59ZfLGh0XAJTp6oM2voZD__5V8Z_4KA0RWHK46OJXEGczUz-lvMNNWScommTL4dXdzPrQpfjnBIc2GcF5cKncVDxf1Zv20bdlJ6FgcfdyiMMK2LLBuH2qJKns82UhYmYWK61kfjJENEaool4f0LnpqUNN0Q-AuZ-cGOUzt39dO" 
                            alt="Meeting" 
                            className="album-img" 
                        />
                        <div className="album-overlay gradient-dark opacity-80"></div>
                        <div className="album-content bottom-left p-6">
                            <h3 className="album-title text-white text-xl">धोरणात्मक बैठक<br/><span className="text-sm font-medium">Strategic Planning Meet</span></h3>
                        </div>
                    </div>

                    {/* Small Card 1 */}
                    <div className="album-card small-card relative group overflow-hidden bg-dark">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpaHSuYuGOJuj09RaPccgUKp048f9gZpR9EKnJIMJ012SU5rxtSGrl-CHAea07idRbCjaUJ3aK2gxvuWmDiFvKlll8xkFpRg4gfAk8Ho4kfEeVvx9FD9BwncoAySe2zuMxRnOd6ArHExuEqBvkKJj78s4gx0RGEYwh8j3Gv8nG89kU-YNFwZLt-ku3Ug-a0yAi0JIhryRmJ_VVDeQbq5czH4NH8j6iHRs3JZXUb2QV4vHV9FB9Wn3A4CA9bg-ISyD-uS9GcLGmoh6O" 
                            alt="Volunteers" 
                            className="album-img" 
                        />
                        <div className="album-overlay gradient-dark opacity-80"></div>
                        <div className="album-content bottom-left p-6">
                            <h3 className="album-title text-white text-lg">कार्यकर्ता मेळावा</h3>
                        </div>
                    </div>

                    {/* Small Card 2 */}
                    <div className="album-card small-card relative group overflow-hidden bg-dark">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2jN2Rdd4Az87GkhYm0soTNeR5IpEE6ir9Dde3GxRpiTsNJN-I3Q7Hi2Azzjz7qV3mIvSfa22dj_zs9xOF9f6RgS8C0QVdKXHz3IcCTiIbWSDZ79MJsRYyg6MStJVywORQmhFwQWT4HEtWEDLt2bZdoaLW88CrCo4RUpd2eUsRUR1ka_vxwEs0xFYasxeRH6Lc-O5Ld8FVxz7ZuI_ObyRpINMfSoqpql0-ReujcpL8edYl8-wpFqlw1hQE3bckZsxYRallYM74IlBq" 
                            alt="Speech" 
                            className="album-img" 
                        />
                        <div className="album-overlay gradient-dark opacity-80"></div>
                        <div className="album-content bottom-left p-6">
                            <h3 className="album-title text-white text-lg">जाहीर सभा</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Grassroots Layered Section */}
            <section className="bg-gray-light py-20 px-8">
                <div className="max-width-container grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 z-10">
                        <div className="w-16 h-1 bg-primary mb-6"></div>
                        <h2 className="font-black text-4xl text-dark leading-tight mb-6">
                            तळागाळातील संवाद<br/>
                            <span className="text-secondary text-2xl font-bold uppercase tracking-widest">Grassroots Meetings</span>
                        </h2>
                        <p className="text-gray text-lg leading-relaxed mb-8">
                            प्रत्येक मतदाराशी वैयक्तिक संवाद साधून त्यांच्या समस्या जाणून घेणे हाच आमचा मूळ पाया आहे. या प्रवासातील काही महत्त्वाचे क्षण.
                        </p>
                        <button className="btn-solid-primary rounded-lg">अल्बम पहा (View All)</button>
                    </div>
                    <div className="lg:col-span-7 gallery-layered-images relative">
                        <div className="layer-img-1 rounded-xl shadow-2xl border-white-4 overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaAZeKEwN523k0voM3FACxf-M4S4rqpJ467v7xXMjOBboEnv31yuJSxOSH2eNVMvl7heEfrKZQv9hu6Y6YSVg9NlTttAJY4DB5izDL4g4aFKitkyxabkOvk07dhpMQ7EpwU7yId8__v5Jv7Z9MXtw3aC_aOSw_Z8XUl2ZpERoSXdNYxl7feZVrwDam0J168mAyfPGaSnOyuJunska5bNBE41_csddg0zwwVq5eqctyU1f-0RiYu9Uawauy5DFtFMF6UEf8MxO0pQhj" alt="Meeting 1" />
                        </div>
                        <div className="layer-img-2 rounded-xl shadow-2xl border-white-4 overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFXwGV9EI1TXzJIWFSA4yRUJ2CPid85geZhHhd3rUMTzSgiiiUw0Ugg9P1G2TjlbYBX46fhgxqsYkkfECd7mfhHUz9KwdVuu3x9YM2YRvWUQd_ZgkBKge-YlBEqHhMeNGmDR7g4RSHqClmNhrjuG8iBQ2Xlybv_sqMArD_F8cKtN5AmFuoO5caCP3Cux_xu1xIfKowme8n7-Ole_7aa6VJKdetFtiFq2_QX2lgQuWBbAn5qgb0CjGkZCMmAAuWOsrpWhpPgEjvvREO" alt="Meeting 2" />
                        </div>
                        <div className="layer-stat bg-primary shadow-xl rounded-lg text-white p-6 absolute">
                            <span className="block text-4xl font-black">५००+</span>
                            <span className="text-sm font-bold uppercase">Meetings Conducted</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Recent Events Grid */}
            <section className="padding-section max-width-container">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-black text-4xl text-dark">ताज्या घडामोडी</h2>
                        <p className="text-primary-color font-bold uppercase tracking-widest">Recent Events</p>
                    </div>
                </div>

                <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Video Card */}
                    <div className="event-card bg-white rounded-xl shadow-sm group cursor-pointer overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDabPeiElRz843kqi7GhxBktTkUXv_h5RH1UROIdUxPAmIOupaH_Pdn6HjNhg-SGRlSzN04RoSbPXFk7R9JF0BFqm9dGIdj2gExJvQJmNCKX_c-RIOd94WuMcWG-NUZnjb5sM3XQYKjGjbWP_FdLzZ4w1goBvY0EpT5o-QF0htLW5l_jO0ulrxdyUeMxYNNC3pB56Zh0WX-ujrn27Wogmakjypyhb0a5lPnDBJ67ClmIQO9y7zTaM7aWfDewT_WGFqMcudTJ02oLdmI" alt="Video" className="group-hover-scale" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="play-btn bg-primary-light shadow-xl text-white rounded-full flex items-center justify-center">
                                    <Play size={32} />
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-dark text-white text-xs px-2 py-1 rounded opacity-80 backdrop-blur">03:45</div>
                        </div>
                        <div className="p-6">
                            <span className="text-primary-color font-bold text-xs uppercase tracking-widest">Video • Oct 24</span>
                            <h4 className="font-extrabold text-xl mt-2 mb-3 text-dark">युवा संवाद: मुंबई मेट्रो पॉलिटन रिजन</h4>
                            <p className="text-sm text-gray line-clamp-2">तरुणांच्या उज्ज्वल भविष्यासाठी आखलेले आमचे व्हिजन या व्हिडिओमध्ये पहा.</p>
                        </div>
                    </div>

                    {/* Photo Card 1 */}
                    <div className="event-card bg-white rounded-xl shadow-sm group cursor-pointer overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAznuRAF1XBcjtV0Yh8GuZ1eRtkOWilEE-G-JnvbB97FN2bPBJei0bpvUw93b2ruDRD4ROlLnwqdEHE_xLHLuKOZsYie1PaFYLer1PYdz8OW6c6lpxa7_FRNIldRY5RQmxA7_h_bzw3gv7qC2Eh7YM-vSibaSLEW7NYHrF2iCtZKRQM0dbosyZeVwOjrKvWLOjRKx1lea0uOkglHhmsU2IUB9fzncRq4CLaxO-AAjAdIgYcpA6XV1W58b3WhSY_HlEIMuU9TSFGBBLK" alt="Photo" className="group-hover-scale" />
                            <div className="absolute bottom-4 left-4">
                                <ImageIcon size={24} className="text-white drop-shadow-md" />
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Photo Album • Oct 22</span>
                            <h4 className="font-extrabold text-xl mt-2 mb-3 text-dark">नवीन आरोग्य केंद्राचे लोकार्पण</h4>
                            <p className="text-sm text-gray line-clamp-2">परिसरातील नागरिकांसाठी अद्ययावत वैद्यकीय सुविधांचे उद्घाटन.</p>
                        </div>
                    </div>

                    {/* Photo Card 2 */}
                    <div className="event-card bg-white rounded-xl shadow-sm group cursor-pointer overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmCM5y79kmIT2YPJWHQtESlEYrJ6Iktl6yQUuFJOj0z95QViSYIBUbzTsgvc9VJYQqOeYZmfinbho6p5ruvYDdIbYAju3W5RpAjVXzb-FCRIMR2KLHo9TQP-ef-0-zBjmhDk_O7etFAdpg0WyYBHB1L5ctBEWywhuqGmwpKBvuX1YONIzX39QEhNTEc3_YyrCl7nBNOj3ayOQsdLec73Mzh3g3sYc7y3oiIUMrIembeOxFXiwVjRSX1ihsq5UM0L8w0Q2ZNJ02shZk" alt="Photo 2" className="group-hover-scale" />
                            <div className="absolute bottom-4 left-4">
                                <ImageIcon size={24} className="text-white drop-shadow-md" />
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Photo Album • Oct 20</span>
                            <h4 className="font-extrabold text-xl mt-2 mb-3 text-dark">IT क्षेत्रातील उद्योजकांशी चर्चा</h4>
                            <p className="text-sm text-gray line-clamp-2">तंत्रज्ञान आणि रोजगाराच्या नवीन संधींबाबत विशेष गोलमेज परिषद.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-3 border-2 border-outline-variant text-gray font-bold px-10 py-4 rounded-lg hover:bg-gray-lighter transition-all">
                        आणखी पहा (Load More) <ChevronDown size={20} />
                    </button>
                </div>
            </section>

            {/* 5. Archive Banner */}
            <section className="max-width-container pb-20">
                <div className="bg-saffron-light rounded-2xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="relative z-10 max-w-xl">
                        <h2 className="font-black text-3xl md:text-4xl text-dark mb-4">आमचे जुने दस्तऐवज आणि दुर्मिळ क्षण पहा.</h2>
                        <p className="text-dark font-medium text-lg">शिवसेनेचा इतिहास आणि गौरवशाली प्रवासाचे साक्षीदार व्हा.</p>
                    </div>
                    <div className="relative z-10">
                        <button className="bg-dark text-white px-8 py-4 font-bold rounded-lg shadow-lg">Archives (दप्तरखाना)</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;
