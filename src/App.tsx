import { Route, Routes, Navigate } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {MainPage} from './pages/MainPage/MainPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { PublishedVacancies } from './pages/PublishedVacancies/PublishedVacancies';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/signin' element={<p>Signin</p>}/>
        <Route path='/signup' element={<p>Signup</p>}/>
        <Route path='/' element={<Navigate to='/employer/home'/>}/>
        <Route path='/employer/home' element={<PublishedVacancies />}/>
        <Route path='/employer/resumes' element={<MainPage />}/>
        <Route path='/employer/resumes/:id' element={<p>ResumeOneCard</p>}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
