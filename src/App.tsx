import { Route, Routes } from 'react-router-dom';
import { CreateVacancyFormSteps } from './components/shared/CreateVacancyFormSteps/CreateVacancyFormSteps';
import Popup from './components/shared/Popup/Popup';
import {Header} from './components/Header/Header';
import { Card } from './components/shared/Card/Card';

function App() {
  return (
    <>
      {/* <Header/>
      <CreateVacancyFormSteps />
      <Popup /> */}
      <Card/>
    </>
  );
}

export default App;
