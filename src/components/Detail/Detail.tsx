import { clsx } from 'clsx'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import sortQueryOrder from '../../utils/sortQueryOrder.js'
import Title from './Title.js'
import Tags from './Tags.js'
import Instruction from './Instruction.js'
import More from './More.js'
import GoHome from './GoHome.js'
interface Props {}

function createIngredientMapMeasureList(data: any) {
  const keys = []
  for (let i = 1; i < 21; i++) {
    keys.push({
      ingredientKey: `strIngredient${i}`,
      measureKey: `strMeasure${i}`,
    })
  }
  const ingredientMapMeasureList = []
  for (let i = 0; i < keys.length; i++) {
    const ingredient = data.meals[0][keys[i].ingredientKey]
    const measure = data.meals[0][keys[i].measureKey]
    if (!ingredient) break
    ingredientMapMeasureList.push({
      ingredient,
      measure,
    })
  }
  return ingredientMapMeasureList as { ingredient: string; measure: string }[]
}

function Component() {
  const { id } = useParams()
  const url = import.meta.env.VITE_BASE_URL + '/lookup.php?i=' + id
  const { isLoading, error, data } = useSWR(sortQueryOrder(url))
  if (isLoading) return <div>loading...</div>
  if (error) return <div>error</div>

  const titleData = {
    idMeal: data.meals[0].idMeal,
    strMeal: data.meals[0].strMeal,
    strMealThumb: data.meals[0].strMealThumb,
  }
  const tagsData = {
    strCategory: data.meals[0].strCategory,
    strArea: data.meals[0].strArea,
    strTags: data.meals[0].strTags,
  }
  const instructionData = {
    strInstructions: data.meals[0].strInstructions as string,
    ingredientMapMeasureList: createIngredientMapMeasureList(data),
  }

  const moreData = {
    strSource: data.meals[0].strSource,
    strYoutube: data.meals[0].strYoutube,
  }

  return (
    <div className={clsx('flex flex-col items-center gap-3', ' p-2')}>
      <Title titleData={titleData}></Title>
      <Tags tagsData={tagsData}></Tags>
      <More moreData={moreData}></More>
      <Instruction instructionData={instructionData}></Instruction>
      <GoHome></GoHome>
    </div>
  )
}

export default Component
