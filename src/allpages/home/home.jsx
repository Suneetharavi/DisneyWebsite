import React from 'react'
import Disneylogo from '../components/Disneylogo';
import DisneyBody from './components/DisneyBody';
import SecondBody from './components/SecondBody';
import ThirdBody from './components/ThirdBody';
import FourthBody from './components/FourthBody';
import Commingsoon from './components/Commingsoon';
import Vacation from './components/Vacation';
import Footers from './components/Footers';

function home() {
    return (
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
      );
}

export default home