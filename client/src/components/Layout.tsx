import React from 'react'
import Dummynavbar from './Dummynavbar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div>
        <Dummynavbar/>
        <Outlet/>
    </div>
  )
}

export default Layout