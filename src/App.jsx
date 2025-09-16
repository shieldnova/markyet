import React from 'react'
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About_us from './sections/About_us';
import Blogs from './sections/Blogs';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
const App = () => {
  return (
    <main>
      <Nav></Nav>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        <About_us></About_us>
      </section>
      <section>
        <Blogs></Blogs>
      </section>
      <section>
        <Contact></Contact>
      </section>
      <section>
        <Footer></Footer>
      </section>
      </main>
  )
}

export default App