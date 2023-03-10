import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Learn from './components/pages/Learn';
import Projects from './components/pages/Projects';


function App() {
  return (
    <Router>
      <div className="container-fluid bd-dark">
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="challenge13-react-app">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/challenge13-react-app" element={<Home />} />
          <Route path="/challenge13-react-app/about" element={<About />} />
          <Route path="/challenge13-react-app/blog" element={<Blog />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/challenge13-react-app/contact/*" element={<Contact />} />
          <Route path="/challenge13-react-app/learn" element={<Learn />} />
          <Route path="/challenge13-react-app/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
