import { clsx } from 'clsx'
import { useState } from 'react'
import { ITab } from '../../type.js'
import { useDebounce } from 'usehooks-ts'
import Header from './Header/Header.js'
import FavoriteBoard from './FavoriteBoard.js'
import SurpriseBoard from './SurpriseBoard.js'
import SearchBoard from './SearchBoard.js'

function Component() {
  const [searchText, setSearchText] = useState('')
  const [tab, setTab] = useState<ITab>(ITab.Search)
  const debouncedSearchText = useDebounce(searchText, 1000)
  const [surpriseClicked, setSurpriseClicked] = useState(false)

  return (
    <div>
      <Header
        tab={tab}
        searchText={searchText}
        setSearchText={setSearchText}
        setTab={setTab}
        setSurpriseClicked={setSurpriseClicked}
      ></Header>
      <div className={clsx('mt-6')}>
        {tab === ITab.Favorite && <FavoriteBoard></FavoriteBoard>}
        {tab === ITab.Surprise && (
          <SurpriseBoard
            surpriseClicked={surpriseClicked}
            setSurpriseClicked={setSurpriseClicked}
          ></SurpriseBoard>
        )}
        {tab === ITab.Search && (
          <SearchBoard searchText={debouncedSearchText}></SearchBoard>
        )}
      </div>
    </div>
  )
}

export default Component
