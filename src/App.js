import './App.css';
import Group from './components/group/Group';
import GroupStage from './components/group_stage/GroupStage';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';
import { useState} from 'react';
import Login from './pages/login/Login';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      
      {/* <GroupStage /> */}
      <Login />
    </div>
  );
}

export default App;
