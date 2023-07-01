import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {StudentRegister} from "./pages/StudentRegister";
import CustomNavbar from './components/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<StudentRegister />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;