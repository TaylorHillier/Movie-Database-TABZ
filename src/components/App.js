import React from 'react';
import PageAbout from './PageAbout';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <nav>
        {/* Add navigation links here */}
      </nav>
      <main>
        <PageAbout/>
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
}

export default App;