import { ITab } from '../../../type.js'
import * as React from 'react'
import { clsx } from 'clsx'
import { useAutoAnimate } from '@formkit/auto-animate/react'
interface Props {
  tab: ITab
  setSurpriseClicked: (surpriseClicked: boolean) => void
  setTab: (tab: ITab) => void
}

function Component({ tab, setTab, setSurpriseClicked }: Props) {
  const [parent] = useAutoAnimate()

  function handleSurpriseClick() {
    setTab(ITab.Surprise)
    setSurpriseClicked(true)
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
        onClick={handleSurpriseClick}
      >
        <span>Surprise Me!</span>
        {tab === ITab.Surprise && <span className={clsx('text-3xl')}>🌟</span>}
      </button>
    </div>
  )
}

export default Component
