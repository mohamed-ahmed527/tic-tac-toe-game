import React from 'react'
import Xicon from './../icons/Xicon';
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Oicon from '../icons/Oicon';

export const Win = () => {
  const {winner, handleReset, handleNextRound} = useContext(GameContext);

  return (
    <div className='score'>
        {winner && winner !== "no" ? (
          <>
            <p> You Win! </p>
            <h3 className={`score__title ${winner ==="o"? 'text-yellow' : 'text-blue'}`}>
              {winner === "x" ? <Xicon/> : <Oicon/>}
              Takes the round
            </h3>
          </>
        ) : (
          <h3 className='score__title text-yellow'>No Winner </h3>
        )}
        <div class="score__btns">
            <button className='btn btn-sm'onClick={handleReset}> quit </button>
            <button className='btn btn-sm btn-yellow' onClick={handleNextRound}>Next Round</button>
        </div>
    </div>
  )
}
