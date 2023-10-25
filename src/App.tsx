import { Route, Routes, Navigate } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {MainPage} from './pages/MainPage/MainPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { PublishedVacancies } from './pages/PublishedVacancies/PublishedVacancies';
import { ResumeOneCard } from './pages/ResumeOneCard/ResumeOneCard';
import { MuiLoginForm } from './pages/MuiLoginForm/MuiLoginForm';
import { MuiRegisterForm } from './pages/MuiRegisterForm/MuiRegisterForm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/signin' element={<MuiLoginForm role='employer' />}/>
        <Route path='/signup' element={<MuiRegisterForm role='employee' />}/>
        <Route path='/' element={<Navigate to='/employer/home'/>}/>
        <Route path='/employer/home' element={<PublishedVacancies />}/>
        <Route path='/employer/resumes' element={<MainPage />}/>
        <Route path='/employer/resumes/:id' element={<ResumeOneCard />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
