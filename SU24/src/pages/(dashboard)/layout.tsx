import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <aside>Aside</aside>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout