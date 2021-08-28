import './App.css';
import Group from './components/group/Group';
import GroupStage from './components/group_stage/GroupStage';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GroupStage />
    </div>
  );
}

export default App;
