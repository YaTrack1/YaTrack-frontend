import { Route, Routes, Navigate } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {MainPage} from './pages/MainPage/MainPage';
import { NotFoundNotice } from './components/NotFoundNotice/NotFoundNotice';
import { PublishedVacancies } from './pages/PublishedVacancies/PublishedVacancies';
import { NoFavoritesNotice } from './components/NoFavoritesNotice/NoFavoritesNotice';

function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path='/signin' element={<p>Signin</p>}/>
        <Route path='/signup' element={<p>Signup</p>}/>
        <Route path='/' element={<Navigate to='/employer/home'/>}/>
        <Route path='/employer/home' element={<PublishedVacancies />}/>
        <Route path='/employer/resumes' element={<MainPage />}/>
        <Route path='/employer/resumes/:id' element={<p>ResumeOneCard</p>}/>
        <Route path='*' element={<NotFoundNotice />}/>
      </Routes> */}
      <NoFavoritesNotice/>
    </>
  );
}

export default App;
