import React from 'react'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
  return (
    <div>
        <header>
            Header website
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default WebsiteLayout