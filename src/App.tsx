import React from 'react';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import SkillsContact from './sections/SkillsContact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <SkillsContact />
    </Layout>
  );
}

export default App;