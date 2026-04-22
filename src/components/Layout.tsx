import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTAs from './FloatingCTAs';
import './Layout.css';

const Layout: React.FC = () => {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <FloatingCTAs />
        </div>
    );
};

export default Layout;
