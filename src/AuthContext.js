import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    
    const navigate= useNavigate();
  const [token, setToken] = useState('');
  const [assetInfo,setAssetInfo] = useState();
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  useEffect(() => {
    const fetchUserData = async ()=>{
      
            try {
              const response = await fetch('https://devassetapi.remotestate.com/asset-management/user/dashboard', {
                method: 'GET',
                headers: {
                  'Authorization': `${token}`,
                  'Content-Type': 'application/json',
                },
              });
      
              if (response.ok) {
                const data = await response.json();
                setAssetInfo(data)
              } else {
                
                console.error('Request failed:', response.statusText);
              }
            } catch (error) {
              
              console.error('Error:', error);
            }
          };
      

    fetchUserData();
}, [token]);

  const clearToken = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, clearToken ,assetInfo, navigate }}>
      {children}
    </AuthContext.Provider>
  );
}
