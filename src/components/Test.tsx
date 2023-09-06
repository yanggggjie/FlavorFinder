import { clsx } from 'clsx'
import axios from 'axios'
import React from 'react'
import { AiFillAccountBook } from 'react-icons/ai/index.js'
interface Props {}

function Component({}: Props) {
  async function handleClick() {
    const res = await axios.get('/proxy/login')
    console.log(res.data)
  }

  return (
    <div>
      <AiFillAccountBook></AiFillAccountBook>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Component
