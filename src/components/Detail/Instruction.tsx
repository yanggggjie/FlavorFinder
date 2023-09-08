import { clsx } from 'clsx'
interface Props {
  instructionData: {
    strInstructions: string
    ingredientMapMeasureList: {
      ingredient: string
      measure: string
    }[]
  }
}
function Component({ instructionData }: Props) {
  return (
    <div className={clsx('w-96')}>
      <p className={clsx('bg-gray-50 rounded-3xl')}>
        {instructionData.strInstructions}
      </p>
      <table
        className={clsx(
          'mt-3',
          'border-separate  border-spacing-x-10 rounded-3xl bg-gray-50',
        )}
      >
        <thead>
          <tr>
            <td>ingredient</td>
            <td>measure</td>
          </tr>
        </thead>
        <tbody>
          {instructionData.ingredientMapMeasureList.map((value) => {
            return (
              <tr key={value.ingredient}>
                <td>
                  <span>{value.ingredient}</span>
                </td>
                <td>
                  <span>{value.measure}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Component
