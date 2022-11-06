

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Components/Sidebar/SideBar';
import Cars from './Pages/Cars/Cars';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <SideBar/>
      <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/cars' element={<Cars/>}/> 

      </Routes>
    </BrowserRouter>

  );
}

export default App;
