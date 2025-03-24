import './App.css';
import Header from './components/Header';
import ArrayLogic from './pages/ArrayLogic';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ObjectLogic from './pages/ObjectLogic';
import HooksTutorial from './pages/HooksTutorial';
import HooksContext from './pages/HooksContext';
import Login from './pages/Login';
import HooksReducer from './pages/HookReducer';
import Calculator from './pages/Calculator';
import NavBarPractice from './components/navBarPractice';

function App() {
  return (
    <>
     <NavBarPractice/>
    </>
  );
}

function AppRoute() {
  return (
   <div>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/Arraylogic' element={<ArrayLogic/>} />
        <Route path='/HooksReducer' element={<HooksReducer/>} />
        <Route path='/Objectlogic' element={<ObjectLogic/>} />
        <Route path='/Hooks' element={<HooksTutorial/>} />
        <Route path='/Context' element={<HooksContext/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Calculator' element={<Calculator/>} />   
           </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
