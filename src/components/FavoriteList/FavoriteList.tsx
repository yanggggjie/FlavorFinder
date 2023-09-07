import { clsx } from 'clsx'
import useFavoriteList from '../../store/useFavoriteList.js'
import { MdFavorite } from 'react-icons/md/index.js'
interface Props {
  setShowFavorite: (show: boolean) => void
}

function Component({ setShowFavorite }: Props) {
  const favoriteList = useFavoriteList()

  function handleLayerClick() {
    setShowFavorite(false)
  }

  return (
    <div
      className={clsx('p-3', 'fixed inset-0 bg-gray-100 opacity-80')}
      onClick={handleLayerClick}
    >
      <div>
        {favoriteList.favoriteList.map((item) => {
          const isFavorite = favoriteList.inFavoriteList(item)

          function handleFavoriteClick() {
            if (isFavorite) {
              favoriteList.addFavorite(item)
            } else {
              favoriteList.removeFavorite(item)
            }
          }

          return (
            <div
              key={item.idMeal}
              className={clsx('p-1 rounded-xl outline inline-block')}
            >
              <div className={clsx('flex flex-row gap-2')}>
                <img
                  className={clsx('w-10 h-10 rounded-full')}
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
                <button
                  className={clsx('text-3xl', isFavorite && 'text-red-500')}
                  onClick={handleFavoriteClick}
                >
                  <MdFavorite></MdFavorite>
                </button>
              </div>

              <span className={clsx('overflow-x-scroll')}>{item.strMeal}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Component
