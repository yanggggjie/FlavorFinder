import { create } from 'zustand'
import { IMeal } from '../components/type.js'

interface FavoriteListState {
  favoriteList: IMeal[]
  addFavorite: (meal: IMeal) => void
  removeFavorite: (meal: IMeal) => void
  inFavoriteList: (meal: IMeal) => boolean
}

export default create<FavoriteListState>()((setState, getState) => {
  return {
    favoriteList: [],
    addFavorite: (meal: IMeal) => {
      setState((state) => {
        return {
          favoriteList: [...state.favoriteList, meal],
        }
      })
    },
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
  }
})
