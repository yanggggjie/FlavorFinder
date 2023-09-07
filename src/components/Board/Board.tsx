import { clsx } from 'clsx'
import { MdFavorite } from 'react-icons/md/index.js'
import * as React from 'react'
import useFavoriteList from '../../store/useFavoriteList.js'
import { IMeal } from '../type.js'

interface Props {
  meals: IMeal[]
}

function Component({ meals }: Props) {
  const favoriteList = useFavoriteList()
  return (
    <div className={clsx('grid grid-cols-2 gap-3')}>
      {meals.map((meal) => {
        const isFavorite = favoriteList.inFavoriteList(meal)

        function handleFavoriteClick() {
          if (isFavorite) {
            favoriteList.removeFavorite(meal)
          } else {
            favoriteList.addFavorite(meal)
          }
        }

        return (
          <div
            className={clsx('p-3', 'flex flex-col items-center space-y-2')}
            key={meal.strMeal}
          >
            <img
              className={clsx('w-60 rounded-xl')}
              src={meal.strMealThumb}
              alt=""
            />
            <div className={clsx('flex flex-row items-center gap-3')}>
              <span
                className={clsx('text-2xl', isFavorite && 'text-red-500')}
                onClick={handleFavoriteClick}
              >
                <MdFavorite></MdFavorite>
              </span>
              <span className={clsx('font-bold')}>{meal.strMeal}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Component
