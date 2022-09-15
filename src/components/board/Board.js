import React, { useContext } from 'react'
import Xicon from './../icons/Xicon';
import Oicon from './../icons/Oicon';
import BoardCard from './BoardCard';
import { GameContext } from '../../context/GameContext';
import { ModalContext } from '../../context/ModalContext';

const Board = () => {
  const {squares, xNext, ties, winner, winnerLine, playMode, activeUser} = useContext(GameContext);
  const {showModal, setModalMode} = useContext(ModalContext)

  const resetGame = () => {
    showModal()
    setModalMode("start")
  }
  const checkUser = (user) => {
    if(playMode === "cpu"){
      if(user === activeUser) {
        return "You"
      }else{
        return "(cpu)"
      }
    }
  }

  return (
    <div className='board'>
      <div class="board__header">
        <div>
          <Xicon></Xicon>
          <Oicon></Oicon>
        </div>
        <div className='board__turn'>
          {!xNext ? (<Xicon color="light" size="sm"></Xicon>) : <Oicon color="light" size="sm"></Oicon>}
           turn
        </div>
        <div>
          <button className='btn btn-sm board__restart'
          onClick={resetGame}>
          <svg x="0px" y="0px" viewBox="0 0 489.533 489.533" > <g>
          <path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6C49.575,418.961,150.875,501.261,268.175,488.161z"/> </g> </svg>
          </button>
        </div>
      </div>
      <div class="board__body">
        {squares.map((sq, ix) => (
          <BoardCard 
          key={ix} index={ix} user={sq} 
          active={winner && winnerLine && winnerLine.includes(ix)} />
        ))}
      </div>
      <div class="board__footer">
        <div class="card bg-blue">
          <p className='text-light'> X {checkUser('x')} </p>
          <strong className='text-2xl'> {ties.x} </strong>
        </div>
        <div class="card bg-light">
          <p className='text-light'> ties </p>
          <strong className='text-2xl'> {ties.x + ties.o} </strong>
        </div>
        <div class="card bg-yellow">
          <p className='text-light'>  O {checkUser('o')} </p>
          <strong className='text-2xl'> {ties.o} </strong>
        </div>
      </div>
    </div>
  )
}

export default Board;