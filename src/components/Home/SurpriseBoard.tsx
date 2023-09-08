import sortQueryOrder from '../../utils/sortQueryOrder.js'
import useSWRInfinite from 'swr/infinite'
import { useEffect } from 'react'
import Board from './Board/Board.js'
import { uniqBy } from 'lodash-es'
import { IMeal } from './type.js'
interface Props {
  surpriseClicked: boolean
  setSurpriseClicked: (surpriseClicked: boolean) => void
}

function Component({ surpriseClicked, setSurpriseClicked }: Props) {
  const url = import.meta.env.VITE_BASE_URL + '/random.php'
  const { isLoading, error, data, setSize, mutate } = useSWRInfinite(() => {
    return sortQueryOrder(url)
  })
  useEffect(() => {
    if (surpriseClicked) {
      mutate()
    }
    setSurpriseClicked(false)
  }, [surpriseClicked, mutate, setSurpriseClicked])

  useEffect(() => {
    setSize(3)
  }, [])
  if (isLoading) return <div>loading...</div>
  if (error) return <div>error</div>
  const meals: IMeal[] = []
  data.forEach((item) => {
    item.meals.forEach((meal) => {
      meals.push({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
      })
    })
  })
  const uniqueMeals = uniqBy(meals, 'strMeal')
  return (
    <div>
      <Board meals={uniqueMeals}></Board>
    </div>
  )
}

export default Component
