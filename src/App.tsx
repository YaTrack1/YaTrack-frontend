import { Route, Routes } from 'react-router-dom';
import { CreateVacancyFormSteps } from './components/shared/CreateVacancyFormSteps/CreateVacancyFormSteps';
import Popup from './components/shared/Popup/Popup';
import {Header} from './components/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <CreateVacancyFormSteps />
      <Popup />
    </>
  );
}

export default App;
