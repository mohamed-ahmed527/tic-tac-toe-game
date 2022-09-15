import Start from './components/start/Start';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import { useContext } from 'react';
import { GameContext } from './context/GameContext';

function App() {

  const {screen} = useContext(GameContext) ;

  return (
    <div className="App">

      <div className='container'>
        {screen === 'start' && <Start />}
        {screen === 'game' && <Board />}
      </div>
      <Modal></Modal>

    </div>
  );
}

export default App;
