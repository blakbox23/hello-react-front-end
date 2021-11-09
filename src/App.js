import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Greeting />} />     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
