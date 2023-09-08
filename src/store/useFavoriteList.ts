import { create } from 'zustand'
import { IMeal } from '../components/Home/type.js'
import { persist } from 'zustand/middleware'

interface FavoriteListState {
  favoriteList: IMeal[]
  removeFavorite: (meal: IMeal) => void
  inFavoriteList: (meal: IMeal) => boolean
  toggleFavorite: (meal: IMeal) => void
}

export default create<FavoriteListState>()(
  persist(
    (setState, getState) => {
      return {
        favoriteList: [],
        removeFavorite: (meal: IMeal) => {
          setState((state) => {
            return {
              favoriteList: state.favoriteList.filter((item) => {
                return item.idMeal !== meal.idMeal
              }),
            }
          })
        },
        inFavoriteList: (meal: IMeal) => {
          const { favoriteList } = getState()
          return favoriteList.some((item) => {
            return item.idMeal === meal.idMeal
          })
        },
        toggleFavorite: (meal: IMeal) => {
          if (getState().inFavoriteList(meal)) {
            setState((state) => {
              return {
                favoriteList: state.favoriteList.filter((item) => {
                  return item.idMeal !== meal.idMeal
                }),
              }
            })
          } else {
            setState((state) => {
              return {
                favoriteList: [...state.favoriteList, meal],
              }
            })
          }
        },
      }
    },
    {
      name: 'favoriteList',
    },
  ),
)
