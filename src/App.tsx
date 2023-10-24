import { Route, Routes, Navigate } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {MainPage} from './pages/MainPage/MainPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/signin' element={<p>Signin</p>}/>
        <Route path='/signup' element={<p>Signup</p>}/>
        <Route path='/' element={<Navigate to='/employer/home'/>}/>
        <Route path='/employer/home' element={<p>Home</p>}/>
        <Route path='/employer/resumes' element={<MainPage />}/>
        <Route path='/employer/resumes/:id' element={<p>ResumeOneCard</p>}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
