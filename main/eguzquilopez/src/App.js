import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import React from 'react';
import './maincss.css';
import HomeNav from './components/homeNav';
import HeaderHome from './components/headerHome';
import MainHome from './components/mainHome';


function App() {
  return (
    <html>
      <HeaderHome />
      <MainHome />
      <HomeNav />
      <Footer />
    </html>  
  );
}

export default App;
