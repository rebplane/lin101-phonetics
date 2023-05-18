import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import IPAToEnglish from './pages/IPAToEnglish';
import EnglishToIPA from './pages/EnglishToIPA';
import Articulation from './pages/Articulation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/articulation' element={<Articulation/>}></Route>
        <Route path='/ipa-to-english' element={<IPAToEnglish/>}></Route>
        <Route path='/english-to-ipa' element={<EnglishToIPA />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
