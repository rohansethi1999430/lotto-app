
import './App.css';
import Ball from './Ball';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      {/* <Ball num={2}/>
      <Ball num={3}/>
      <Ball num={23}/>
      <Ball num={69}/> */}
      <Lottery/>
      <Lottery title='Mini Lottery' maxNum={10} maxBalls={4}/>
    </div>
  );
}

export default App;
