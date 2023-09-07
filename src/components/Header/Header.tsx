import { clsx } from 'clsx'
import Input from './Input.js'
import Button from './Button.js'
import { ITab } from '../../type.js'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
  setTab: (tab: ITab) => void
  setSurpriseClicked: (surpriseClicked: boolean) => void
}

function Title() {
  return <h1 className={clsx('text-3xl text-center')}>FlavorFinder</h1>
}

function Component({
  searchText,
  setSearchText,
  setTab,
  setSurpriseClicked,
}: Props) {
  return (
    <div className={clsx('flex flex-col items-center gap-4')}>
      <Title></Title>
      <div className={clsx('flex flex-row items-center gap-3')}>
        <Input
          searchText={searchText}
          setSearchText={setSearchText}
          setTab={setTab}
        ></Input>
        <Button
          setTab={setTab}
          setSurpriseClicked={setSurpriseClicked}
        ></Button>
      </div>
    </div>
  )
}

export default Component
