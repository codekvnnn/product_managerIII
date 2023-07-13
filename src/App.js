import './App.css';
import OneProduct from './components/OneProduct';
import Main from './views/Main';
import UpdateProduct from './components/UpdateProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id" element={<OneProduct/>} />
        <Route path="/product/edit/:id" element={<UpdateProduct/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;