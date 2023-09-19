import React from 'react';
import PageAbout from './PageAbout';
import 'PageAbout.css';
import Footer from './Footer';
import 'Footer.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TABZ Movie Database</h1>
      </header>
      <nav>
      </nav>
      <main>
        <PageAbout />
      </main>
      <Footer />
    </div>
  );
}

export default App;