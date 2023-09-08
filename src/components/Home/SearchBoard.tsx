import Board from './Board/Board.js'
import useSWR from 'swr'
import { IMeal } from './type.js'
interface Props {
  searchText: string
}

function Component({ searchText }: Props) {
  const url = '/proxy/search.php?s=' + searchText
  const { isLoading, error, data } = useSWR(url)
  if (isLoading) return <div>loading...</div>
  if (error) return <div>error</div>
  if (data.meals === null) return <div>no result</div>
  const meals: IMeal[] = data.meals.map((meal) => {
    return {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
    }
  })

  return (
    <div>
      <Board meals={meals}></Board>
    </div>
  )
}

export default Component
