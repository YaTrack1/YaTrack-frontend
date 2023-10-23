import { Route, Routes } from 'react-router-dom';
import { CreateVacancyFormSteps } from './components/shared/CreateVacancyFormSteps/CreateVacancyFormSteps';
import Popup from './components/shared/Popup/Popup';
import {Header} from './components/Header/Header';
import { MainMenu } from './components/MainMenu/MainMenu';
import {MainPage} from './components/MainPage/MainPage';

function App() {
  return (
    <>
      <Header/>
      <MainPage />
      {/* <MainMenu /> */}
      {/* <CreateVacancyFormSteps />
      <Popup /> */}
    </>
  );
}

export default App;
