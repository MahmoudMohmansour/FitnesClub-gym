import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons';
import Testemonials from './components/Testemonials/Testemonials';
import Program from './components/programes/Program';
function App() {

  return (
 
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testemonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
