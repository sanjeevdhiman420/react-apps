import './App.css';
import Footer from './Components/ReusableComponent/Footer';
import Header from './Components/ReusableComponent/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';

function App() {

  return (
<>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/About' element={<About/>}/>
</Routes>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
