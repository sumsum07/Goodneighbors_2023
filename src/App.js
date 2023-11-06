
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';
import Intro1 from './pages/Intro1';
import Letter from './pages/Letter';
import News from './pages/News';

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/1" element={<Intro1 />} />
      <Route path="/Letter" element={<Letter />} />
      <Route path="/News" element={<News/>} />
    </Routes>

  </div>)
  ;
}

export default App;
