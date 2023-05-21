import './App.css';
import Banner from './Components/banner';
import Nav from './Components/Nav';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>  
    <Services/>
    <About/>
    <Contact/>
    </div>
  );
}

export default App;
