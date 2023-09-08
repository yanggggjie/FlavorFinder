import { useState } from 'react'
import clsx from 'clsx'
import Home from './components/Home/Home.js'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail/Detail.js'

function Component() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/detail/:id'} element={<Detail />}></Route>
      </Routes>
    </div>
  )
}

export default Component
