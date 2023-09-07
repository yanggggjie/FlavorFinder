import { useState } from 'react'
import Header from './components/Header/Header.js'
import { ITab } from './type.js'
import SurpriseBoard from './components/SurpriseBoard.js'
import SearchBoard from './components/SearchBoard.js'
import { useDebounce } from 'usehooks-ts'
import FavoriteButton from './components/FavoriteButton.js'
import FavoriteList from './components/FavoriteList/FavoriteList.js'

function Component() {
  const [searchText, setSearchText] = useState('')
  const [tab, setTab] = useState<ITab>(ITab.Surprise)
  const debouncedSearchText = useDebounce(searchText, 1000)
  const [surpriseClicked, setSurpriseClicked] = useState(false)
  const [showFavorite, setShowFavorite] = useState(true)

  return (
    <div>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        setTab={setTab}
        setSurpriseClicked={setSurpriseClicked}
      ></Header>
      <div>
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
      <FavoriteButton setShowFavorite={setShowFavorite}></FavoriteButton>
      {showFavorite && (
        <FavoriteList setShowFavorite={setShowFavorite}></FavoriteList>
      )}
    </div>
  )
}

export default Component
