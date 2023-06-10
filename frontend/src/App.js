import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import IPAToEnglish from './pages/IPAToEnglish';
import Articulation from './pages/Articulation';
import Syllabification from './pages/Syllabification';
import References from './pages/References';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/articulation' element={<Articulation/>}></Route>
        <Route path='/ipa-to-english' element={<IPAToEnglish/>}></Route>
        <Route path='/syllabification' element={<Syllabification />}></Route>
        <Route path='/references' element={<References/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
