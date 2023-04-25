import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import { Header } from './components/Header/Header';

//Pages
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';

function App() {

  return (
    <main className='main'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
