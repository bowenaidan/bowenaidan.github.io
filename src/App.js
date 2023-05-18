import { Router } from 'react-router-dom';
import './App.css';
import NavBar from './comp/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './comp/pages/Home';
import Products from './comp/pages/Products';
import Services from './comp/pages/Services';
import SignUp from './comp/pages/SignUp';

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Products' exact element={<Products />} />
        <Route path='/Services' exact element={<Services />} />
        <Route path='/sign-up' exact element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
