import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import {Routes,Route, Router} from 'react-router-dom'
import { AuthProvider } from './AuthContext';
function App() {
  return (
      <div className="App">
      <AuthProvider>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </AuthProvider>  
    </div>
  );
}

export default App;
