import React,{useState} from 'react'
import './App.css';
import RouterMain from '../app-config/RouterMain'
function App() {
  const [token, setToken] = useState();
  return(
    <div className="wrapper">
  
      <RouterMain/>
    </div>
  );
}

export default App;
