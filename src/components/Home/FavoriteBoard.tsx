import { clsx } from 'clsx'
import useFavoriteList from '../../store/useFavoriteList.js'
import Board from './Board/Board.js'

function Component() {
  const favoriteList = useFavoriteList()
  return (
    <div>
      <Board meals={favoriteList.favoriteList}></Board>
    </div>
  )
}

export default Component
