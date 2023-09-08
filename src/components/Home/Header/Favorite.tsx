import { clsx } from 'clsx'
import { ITab } from '../../../type.js'
import * as React from 'react'
import { AiFillStar } from 'react-icons/ai/index.js'
import { useAutoAnimate } from '@formkit/auto-animate/react'
interface Props {
  tab: ITab
  setTab: (tab: ITab) => void
}
function Component({ tab, setTab }: Props) {
  const [parent] = useAutoAnimate()
  function handleFavoriteClick() {
    setTab(ITab.Favorite)
  }

  return (
    <div>
      <button
        ref={parent}
        className={clsx(
          'bg-red-100 font-bold rounded-2xl h-10 w-36',
          'hover:bg-red-200 transition-colors',
          'hover:scale-[1.1] transition-transform',
          'flex flex-row items-center justify-start',
        )}
        onClick={handleFavoriteClick}
      >
        <span>Surprise Me!</span>
        {tab === ITab.Favorite && <span className={clsx('text-3xl')}>🌟</span>}
      </button>
    </div>
  )
}

export default Component
