import { clsx } from 'clsx'
interface Props {
  tagsData: {
    strCategory: string
    strArea: string
    strTags: string
  }
}
function Component({ tagsData }: Props) {
  return (
    <div className={clsx('flex flex-row gap-3')}>
      <span className={clsx('outline px-2 py-1 rounded bg-red-100')}>
        {tagsData.strCategory}
      </span>
      <span className={clsx('outline px-2 py-1 rounded bg-blue-100')}>
        {' '}
        {tagsData.strArea}
      </span>
      {tagsData.strTags && (
        <span
          className={clsx(
            'outline px-2 py-1 rounded bg-green-100',
            'flex flex-row items-center gap-2',
          )}
        >
          {tagsData.strTags}
        </span>
      )}
    </div>
  )
}

export default Component
