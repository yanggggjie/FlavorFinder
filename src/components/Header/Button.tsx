import { clsx } from 'clsx'
import Button from './Button.js'
import { ITab } from '../../type.js'
import * as React from 'react'
interface Props {
  setSurpriseClicked: (surpriseClicked: boolean) => void
  setTab: (tab: ITab) => void
}

function Component({ setTab, setSurpriseClicked }: Props) {
  function handleSurpriseClick() {
    setTab(ITab.Surprise)
    setSurpriseClicked(true)
  }
  return (
    <div>
      <button onClick={handleSurpriseClick}>Surprise Me!</button>
    </div>
  )
}

export default Component
