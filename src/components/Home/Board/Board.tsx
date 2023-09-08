import { clsx } from 'clsx'
import { MdFavorite } from 'react-icons/md/index.js'
import * as React from 'react'
import useFavoriteList from '../../../store/useFavoriteList.js'
import { IMeal } from '../type.js'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNavigate } from 'react-router-dom'

interface Props {
  meals: IMeal[]
}

function Component({ meals }: Props) {
  const favoriteList = useFavoriteList()
  const [parent] = useAutoAnimate()
  const navigate = useNavigate()

  return (
    <div ref={parent} className={clsx('grid grid-cols-3 gap-2')}>
      {meals.map((meal) => {
        const isFavorite = favoriteList.inFavoriteList(meal)
        function handleFavoriteClick() {
          favoriteList.toggleFavorite(meal)
        }
        function handleImageClick() {
          navigate('/detail/' + meal.idMeal)
        }

        return (
          <div
            className={clsx('w-72 h-80', 'flex flex-col items-center')}
            key={meal.strMeal}
          >
            <div
              className={clsx(
                'w-60 h-60',
                'hover:scale-[1.05] transition-transform',
              )}
              onClick={handleImageClick}
            >
              <img
                className={clsx('object-cover rounded-xl')}
                src={meal.strMealThumb}
                alt=""
              />
            </div>
            <div className={clsx('h-14', 'flex flex-row items-center gap-2')}>
              <span
                className={clsx(
                  'text-4xl',
                  isFavorite && 'text-red-500',
                  'hover:scale-[2] transition-transform',
                )}
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
