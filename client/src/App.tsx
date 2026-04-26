import './App.css'
import Board from './component/Board/board'
import Heading from './component/Heading/heading'
import { useSelector } from 'react-redux'
import type { rootState } from './component/Interface.tsx'
function App() {

  const board = useSelector((state: rootState) => state.board.board)

  return (
    <>
      <div className='app'>
        <Heading type="h1" text="Wordee" />

        <div className='board-container'>
          <Board board={board} />
        </div>
      </div>
    </>
  )
}

export default App
