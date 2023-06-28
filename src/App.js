
import './App.css';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Ingredients from './components/Ingredients';
import Overview from './components/Overview';
import Values from './components/Values';

function App() {
  return (
    <div className="App">
      <Hero />
      <Overview />
      <Values />
      <Ingredients />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
