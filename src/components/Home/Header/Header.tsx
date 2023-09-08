import { clsx } from 'clsx'
import Input from './Input.js'
import { ITab } from '../../../type.js'
import Surprise from './Surprise.js'
import Favorite from './Favorite.js'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
  tab: ITab
  setTab: (tab: ITab) => void
  setSurpriseClicked: (surpriseClicked: boolean) => void
}

function Title() {
  return (
    <h1 className={clsx('text-5xl font-bold text-pink-500')}>FlavorFinder</h1>
  )
}

function Component({
  searchText,
  setSearchText,
  tab,
  setTab,
  setSurpriseClicked,
}: Props) {
  return (
    <div className={clsx('flex flex-col items-center gap-4')}>
      <Title></Title>
      <div className={clsx('flex flex-row items-center gap-3')}>
        <Favorite tab={tab} setTab={setTab}></Favorite>
        <Input
          tab={tab}
          searchText={searchText}
          setSearchText={setSearchText}
          setTab={setTab}
        ></Input>
        <Surprise
          tab={tab}
          setTab={setTab}
          setSurpriseClicked={setSurpriseClicked}
        ></Surprise>
      </div>
    </div>
  )
}

export default Component
