import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';
import Xicon from '../icons/Xicon'
import Oicon from './../icons/Oicon';

const BoardCard = ({user="nouser" , active, index}) => {
  const { handelSquareClick } = useContext(GameContext);

  return (
    <div
      className={`card ${active && user === "x" && 'shadow-blue'} ${active && user === "o" && 'shadow-yellow'} ${!active ? 'shadow-gray' : 'active'} `} 
     onClick={() => handelSquareClick(index)}
     >
        {user === "x" && <Xicon color={active && "dark"} size="lg"></Xicon> }
        {user === "o" && <Oicon color={active && "dark"} size="lg"></Oicon> }
    </div>
  )
}

export default BoardCard ;