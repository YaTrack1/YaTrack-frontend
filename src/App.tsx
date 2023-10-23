import { Route, Routes } from 'react-router-dom';
import { CreateVacancyFormSteps } from './components/shared/CreateVacancyFormSteps/CreateVacancyFormSteps';
import Popup from './components/shared/Popup/Popup';
import {Header} from './components/Header/Header';
import { MuiLoginForm } from './components/MuiLoginForm/MuiLoginForm';
import { AuthorizationWrapper } from './components/shared/AuthorizationWrapper/AuthorizationWrapper';

function App() {
  return (
    <>
      <Header/>
      <CreateVacancyFormSteps />
      <MuiLoginForm />
      <AuthorizationWrapper header='Авторизация'/>
    </>
  );
}

export default App;
