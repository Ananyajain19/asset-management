import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {Routes,Route, Router,useLocation} from 'react-router-dom'
import { AuthProvider } from './AuthContext';
import AssetsList from './components/AssetsList';
import Navbar from './components/Navbar';
function App() {
  
  return (
      <div className="App">
      <AuthProvider>
      
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dashboard/assetList' element={<AssetsList/>}></Route>
    </Routes>
    </AuthProvider>  
    </div>
  );
}

export default App;
