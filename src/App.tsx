import { Route, Routes, Navigate } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {MainPage} from './pages/MainPage/MainPage';
import { NotFoundNotice } from './components/NotFoundNotice/NotFoundNotice';
import { PublishedVacancies } from './pages/PublishedVacancies/PublishedVacancies';
import { createTheme, ThemeProvider, StyledEngineProvider, Button } from '@mui/material';
import { ResumeOneCard } from './pages/ResumeOneCard/ResumeOneCard';
import { MuiLoginForm } from './pages/MuiLoginForm/MuiLoginForm';
import { MuiRegisterForm } from './pages/MuiRegisterForm/MuiRegisterForm';

function App() {
  const theme = createTheme({
  })
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
    <>
      <Header />
      <Routes>
        <Route path='/signin' element={<MuiLoginForm role='employer' />}/>
        <Route path='/signup' element={<MuiRegisterForm role='employee' />}/>
        <Route path='/' element={<Navigate to='/employer/home'/>}/>
        <Route path='/employer/home' element={<PublishedVacancies />}/>
        <Route path='/employer/resumes' element={<MainPage />}/>
        <Route path='/employer/resumes/:id' element={<ResumeOneCard />}/>
        <Route path='/employer/resumes/:id' element={<p>ResumeOneCard</p>}/>
        <Route path='*' element={<NotFoundNotice />}/>
      </Routes>
      <Button />
    </>
    </ThemeProvider>
    </StyledEngineProvider>
      );
}

export default App;
