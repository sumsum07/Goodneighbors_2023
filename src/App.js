import { Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';
import Intro1 from './pages/Intro1';
import Letter from './pages/Letter';
import News from './pages/News';
import Last from './pages/Last';


function App() {
  // 페이지의 기본 배경 색상 스타일
  const pageStyle = {
    backgroundColor: '#857c75', // 갈색 배경 색상 (예시)
    minHeight: '100vh', // 화면 높이에 맞게 배경 색상 확장
  };

  return (
    <div className="App" style={pageStyle}>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/1" element={<Intro1 />} />
        <Route path="/Letter" element={<Letter />} />
        <Route path="/News" element={<News />} />
        <Route path="/Last" element={<Last />} />
      </Routes>
    </div>
  );
}

export default App;