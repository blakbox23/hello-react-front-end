import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />     
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
