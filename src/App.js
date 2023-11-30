import './App.css';
import Disneylogo from './components/Disneylogo';
import DisneyBody from './components/DisneyBody';
import SecondBody from './components/SecondBody';
import ThirdBody from './components/ThirdBody';
import FourthBody from './components/FourthBody';
import Commingsoon from './components/Commingsoon';
import Vacation from './components/Vacation';
import Footers from './components/Footers';
import {Route,Routes} from 'react-router-dom';
import home from './allpages/home/home';

function App() {
  return (
    <>
    <div className="App">
      <Disneylogo/>
      <DisneyBody/>
      <SecondBody/>
      <ThirdBody/>
      <FourthBody/>
      <Commingsoon/>
      <Vacation/>
      <Footers/>
    </div>
    <Routes>
      <Route path="/" element={<home />} />
      
    </Routes>
    </>
  );
}

export default App;
