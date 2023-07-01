import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentRegister from "./pages/StudentRegister";
import CustomNavbar from './components/CustomNavbar';
import Achievement from './pages/Achievement'
import 'bootstrap/dist/css/bootstrap.min.css';
import VolunteerRegister from './pages/VolunteerRegister';
import { useEffect } from 'react';
import FundRaiseForm from './pages/FundRaiseForm';
import { FundRaise } from './pages/FundRaise';
import About from './pages/About';
function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
    <div id="google_translate_element"></div>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/str' element={<StudentRegister />} />
          <Route path='/achieve' element={<Achievement />} />
          <Route path='/volunteer' element={<VolunteerRegister />} />
          <Route path='/fundform' element={<FundRaiseForm />} />
          <Route path='/fund' element={<FundRaise />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;