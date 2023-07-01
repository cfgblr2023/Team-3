import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentRegister from "./pages/StudentRegister";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/str' element={<StudentRegister />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;