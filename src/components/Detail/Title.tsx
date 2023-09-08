import { clsx } from 'clsx'
import useFavoriteList from '../../store/useFavoriteList.js'
import { IMeal } from '../Home/type.js'
import { MdFavorite } from 'react-icons/md/index.js'

interface Props {
  titleData: IMeal
}

function Component({ titleData }: Props) {
  const favoriteList = useFavoriteList()
  const isFavorite = favoriteList.inFavoriteList(titleData)
  function handleFavoriteClick() {
    favoriteList.toggleFavorite(titleData)
  }
  return (
    <div className={clsx('w-96 h-70')}>
      <img
        className={clsx('w-96 h-64  rounded-xl', 'object-cover')}
        src={titleData.strMealThumb}
        alt=""
      />
      <div className={clsx('flex flex-row items-center gap-3')}>
        <span className={clsx('text-xl')}>{titleData.strMeal}</span>
        <span
          className={clsx('text-3xl', isFavorite && 'text-red-500')}
          onClick={handleFavoriteClick}
        >
          <MdFavorite></MdFavorite>
        </span>
      </div>
    </div>
  )
}

export default Component
