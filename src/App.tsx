import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, About, Journey, Portfolio, Work, News, MyView, Gallery, Contact } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="journey" element={<Journey />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="work" element={<Work />} />
                    <Route path="news" element={<News />} />
                    <Route path="my-view" element={<MyView />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
