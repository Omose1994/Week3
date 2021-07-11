import logo from './logo.svg';
import './App.css';
import House from './component/House';
import TopNav from './component/TopNav';
import HouseForm from './component/Form';

function App() {
  return (
    <div>
      <TopNav/>
      <House/>
      <HouseForm/>
    </div>
  );
}

export default App;
