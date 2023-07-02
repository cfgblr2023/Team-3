import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home }from './pages/Home';
import StudentRegister from "./pages/StudentRegister";
import CustomNavbar from './components/CustomNavbar';
import Achievement from './pages/Achievement'
import VolunteerRegister from './pages/VolunteerRegister';
import { useEffect } from 'react';
import FundRaiseForm from './pages/FundRaiseForm';
import { FundRaise } from './pages/FundRaise';
import About from './pages/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Volunteer} from './pages/Volunteer'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllStudents from './pages/AllStudents';
import { Student } from './pages/Student';
import AllVolunters from './pages/AllVolunters';
import Email from './pages/Email'
import { Login } from './pages/NewLogin'
import AddSession from './pages/AddSession'
import Events from './pages/Events';
import Jobs from './pages/Jobs';
import { Session } from './pages/Session';
import {Counselling} from './pages/Counselling';
import StudentRecord from './pages/StudentRecord';
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
      <BrowserRouter>
      <div id="google_translate_element"></div>
        <CustomNavbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/student' element={<StudentRegister />} />
          <Route path='/achieve' element={<Achievement />} />
          <Route path='/volunteer' element={<VolunteerRegister />} />
          <Route path='/fundform' element={<FundRaiseForm />} />
          <Route path='/fund' element={<FundRaise />} />
          <Route path='/about' element={<About />} />
          <Route path='/allStudent' element={<AllStudents />} />
          <Route path='/student/:id' element={<Student />} />
          <Route path='/allVolunteer' element={<AllVolunters />} />
          <Route path='/volunteer/:id' element={<Volunteer />} />
          <Route path='/email' element={<Email />} />
          <Route path='/login' element={<Login />} />
          <Route path='/schedule' element={<AddSession />} />
          <Route path='/schedule' element={<AddSession />} />
          <Route path='/events' element={<Events />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/session' element={<Session />} />
          <Route path='/counselling' element={<Counselling/>}/>
          <Route path='/strecord' element={<StudentRecord/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;



