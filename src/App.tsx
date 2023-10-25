import { Route, Routes, Navigate } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {MainPage} from './pages/MainPage/MainPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { PublishedVacancies } from './pages/PublishedVacancies/PublishedVacancies';
import { createTheme, ThemeProvider, Button } from '@mui/material';
import { ResumeOneCard } from './pages/ResumeOneCard/ResumeOneCard';
import { MuiLoginForm } from './pages/MuiLoginForm/MuiLoginForm';
import { MuiRegisterForm } from './pages/MuiRegisterForm/MuiRegisterForm';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FF0200',
        light: '#B5B5B7',
        dark: '#1D6BF3',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#FFFFFF',
        light: '#1D6BF3',
        dark: '#1D6BF3',
        contrastText: '#B5B5B7',
      },
      error: {
        main: '#FF0200',
      },
    },
  })
  return (
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
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
      <Button />
    </>
    </ThemeProvider>
  );
}

export default App;
