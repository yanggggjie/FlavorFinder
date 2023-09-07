import { clsx } from 'clsx'
import { MdFavorite } from 'react-icons/md/index.js'
import * as React from 'react'
interface Props {
  setShowFavorite: (show: boolean) => void
}

function Component({ setShowFavorite }: Props) {
  function handleClick() {
    setShowFavorite(true)
  }
  return (
    <div className={clsx('fixed top-2 right-2 text-3xl')} onClick={handleClick}>
      <MdFavorite></MdFavorite>
    </div>
  )
}

export default Component
