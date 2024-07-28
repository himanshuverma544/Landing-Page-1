import './App.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';

import { HOME } from '../routes';


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={HOME.pathname} element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
