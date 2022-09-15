import { createContext, useContext, useEffect, useState } from "react";
import { calcBestMove, calcWinner } from './../helpers/CalcSquares';
import { ModalContext } from "./ModalContext";

const GameContext = createContext();

const GameState = (props) => {
    const {showModal, setModalMode, hideModal} = useContext(ModalContext);

    const [screen, setScreen] = useState('start') // start || game
    const [activeUser, setActiveUser] = useState('x') // X || O
    const [playMode, setPlayMode] = useState('user') //vs user || vs cpu
    
    const [squares , setSquares] = useState(new Array(9).fill('')); //fill of X|| O
    const [xNext, setXNext] = useState(false) //flase => x plays now

    const [winner, setWinner] = useState(null);
    const [winnerLine, setWinnerLine] = useState(null);
    const [ties, setTies] = useState({x: 0 , o: 0});

    useEffect(() => {
        checkNoWinner();

        const currentUser = xNext ? 'o' : 'x' ;
        if(playMode === 'cpu' && currentUser !== activeUser && !winner )
        {
            cpuNextCpu(squares)
        }



    }, [screen, xNext, winner]);

    const changePlayMode = (mode) => {
        setPlayMode(mode);
        setScreen('game');
    }

    const handelSquareClick = (ix) => {''
        if(squares[ix] || winner) //if not empty ||if winner=> stop func
        { return }

        const currentUser = xNext ? "o" : "x" ;
        if(playMode === "cpu" && currentUser !== activeUser){
            return //stop click
        }
        
        let ns = [...squares]
        ns[ix] = xNext ? "o" : "x" ;
        setSquares(ns);
        setXNext(!xNext);

        //check winner
        checkWinner(ns);
    }
    //check winner
    const checkWinner = (ns) => {
        const isWinner = calcWinner(ns);
        if(isWinner) {
            setWinner(isWinner.winner)
            setWinnerLine(isWinner.line)

            // set ties
            const ti = {...ties}
            ti[isWinner.winner] += 1 ;
            setTies(ti)

            showModal();
            setModalMode('winner');
        }
    }
    //check no winner
    const checkNoWinner = () => {
        const moves = squares.filter(sq => sq === "")
        if (moves.length === 0){
            setWinner("no")
            showModal()
            setModalMode("winner")
        }
    }

    //reset game
    const handleReset = () => {
        setSquares(new Array(9).fill(''));
        setXNext(false);
        setWinner(null);
        setWinnerLine(null);
        setActiveUser("x");
        setTies({ x:0 , o:0 });
        hideModal();
        setScreen("start");
    }
    //next round
    const handleNextRound = ()=> {
        setSquares(new Array(9).fill(""))
        setXNext(winner === "x") //true (O begin next round)
        setWinner(null)
        setWinnerLine(null)
        hideModal()
    }


    const cpuNextCpu = (sq) => {
        const bestMove = calcBestMove(sq , activeUser === "x" ? "o" : "x")
        let ns = [...squares]
        ns[bestMove] = !xNext ? "x" : "o"
        setSquares(ns)
        setXNext(!xNext)
        checkWinner(ns);
    }


    return (
        <GameContext.Provider
        value={{
            screen,
            activeUser,
            squares,
            xNext,
            ties,
            winner,
            winnerLine,
            playMode,
            
            handleReset,
            handleNextRound,
            setActiveUser,
            changePlayMode,
            handelSquareClick
        }}>
            {props.children} </GameContext.Provider>
    )
}

export {GameContext , GameState};