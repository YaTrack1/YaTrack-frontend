import { Route, Routes } from 'react-router-dom';
import { CreateVacancyFormSteps } from './components/shared/CreateVacancyFormSteps/CreateVacancyFormSteps';
import {Header} from './components/Header/Header';
import { MuiRegisterForm } from './components/MuiRegisterForm/MuiRegisterForm';
import { MainMenu } from './components/MainMenu/MainMenu';
import {MainPage} from './components/MainPage/MainPage';
import { MuiLoginForm } from './components/MuiLoginForm/MuiLoginForm';

function App() {
  return (
    <>
      <Header/>
      <CreateVacancyFormSteps />
      <MuiRegisterForm role='employer'/>
      <MuiLoginForm role='employer' />
      <MainPage />
      {/* <MainMenu /> */}
      {/* <CreateVacancyFormSteps />
      <Popup /> */}
    </>
  );
}

export default App;
