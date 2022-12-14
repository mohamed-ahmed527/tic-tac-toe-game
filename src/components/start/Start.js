import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';
import Oicon from '../icons/Oicon';
import Xicon from '../icons/Xicon';

const Start = () => {

  const {activeUser, playmode, setActiveUser, changePlayMode} = 
  useContext(GameContext);


  return (
    <div className='start'>
        <div className='start__header'>
          <Xicon size="sm"></Xicon>
          <Oicon size="sm"></Oicon>
        </div>
        <div class="card shadow-gray">
          <h1 className='text-lg'>Pick player 1'st mark</h1>
          <div class="start__players">
            <span 
            className={activeUser ==="x" ? 'start__players--active' :""}
            onClick={() => setActiveUser("x")}
            >
              <Xicon color={activeUser === "x" ? "dark" : "light"}></Xicon>
            </span>
            <span 
            className={activeUser ==="o" ? 'start__players--active' :""}
            onClick={() => setActiveUser("o")}
            >
              <Oicon color={activeUser === "x" ? "light" : "dark"}></Oicon>
            </span>
          </div>
          <p className='text-light'>Remember: X goes first</p>
        </div>
        <div class="start__btns">
          <button 
          className='btn btn-yellow'
          onClick={() => changePlayMode('cpu')}> new game (vs CPU) </button>
          <button 
          className='btn btn-blue'
          onClick={() => changePlayMode('user')}> new game (vs Player) </button>
        </div>

    </div>
  )
}

export default Start;