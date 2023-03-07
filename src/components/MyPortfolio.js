import React, { useState } from 'react';
import "../css/normalize.css";
import "../css/portfolio.css";
import Header from "./Header";
import Footer from "./Footer"
import Home from "./Home";
import About from "./Pages/About";
import Nav from "./Nav"


export default function MyPortfolio() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
      
        return <About />;
      };
      const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
        <Header />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    );
  }