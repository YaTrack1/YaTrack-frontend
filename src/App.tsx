import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { NotFoundNotice } from './components/NotFoundNotice/NotFoundNotice';
import { PublishedVacancies } from './pages/PublishedVacancies/PublishedVacancies';
import { StyledEngineProvider } from '@mui/material';
import { ResumeOneCard } from './pages/ResumeOneCard/ResumeOneCard';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import styles from './App.module.scss';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/signin' element={<LoginPage />}/>
          <Route path='/signup' element={<RegisterPage />}/>
          <Route path='/' element={<Navigate to='/employer'/>}/>
          <Route path='/employer/' element={<PublishedVacancies />}/>
          <Route path='/employer/resumes' element={<MainPage />}/>
          <Route path='/employer/resumes/id' element={<ResumeOneCard />}/>
          <Route path='*' element={<NotFoundNotice />}/>
        </Routes>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
