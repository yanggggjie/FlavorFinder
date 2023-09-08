import { clsx } from 'clsx'
import { ITab } from '../../../type.js'
import * as React from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
interface Props {
  tab: ITab
  searchText: string
  setSearchText: (searchText: string) => void
  setTab: (tab: ITab) => void
}

function Component({ tab, searchText, setSearchText, setTab }: Props) {
  const [parent] = useAutoAnimate()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }
  function handleFocus() {
    setTab(ITab.Search)
  }
  return (
    <div className={clsx('relative')} ref={parent}>
      <input
        className={clsx(
          'border-y-0 rounded-md',
          'hover:scale-[1.1] transition-transform',
        )}
        type="text"
        placeholder={'type to search'}
        value={searchText}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {tab === ITab.Search && (
        <span
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 right-2',
            'text-3xl',
          )}
        >
          🌟
        </span>
      )}
    </div>
  )
}

export default Component
