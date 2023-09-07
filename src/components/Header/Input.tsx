import { clsx } from 'clsx'
import { ITab } from '../../type.js'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
  setTab: (tab: ITab) => void
}

function Component({ searchText, setSearchText, setTab }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }
  function handleFocus() {
    setTab(ITab.Search)
  }
  return (
    <>
      <input
        className={clsx('rounded-md')}
        type="text"
        value={searchText}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </>
  )
}

export default Component
