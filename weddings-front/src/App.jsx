import VenueCards from './components/VenueCards';
import WeddingStyles from './components/WeddingStyles';
import Connect from './components/Connect';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="app">
      <VenueCards />
      <WeddingStyles />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;