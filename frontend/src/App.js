import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {StudentRegister} from "./pages/StudentRegister";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<StudentRegister />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;