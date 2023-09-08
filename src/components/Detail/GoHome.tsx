import { clsx } from 'clsx'
import { BiHomeHeart } from 'react-icons/bi/index.js'
import { useNavigate } from 'react-router-dom'

function Component() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/')
  }
  return (
    <div
      className={clsx(
        'fixed top-2 left-2 text-5xl',
        'hover:scale-125 transition-transform',
        'hover:text-red-600 transition-colors',
      )}
      onClick={handleClick}
    >
      <BiHomeHeart></BiHomeHeart>
    </div>
  )
}

export default Component
