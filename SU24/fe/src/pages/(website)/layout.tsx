
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>Header</header>
            <Outlet />
           <footer>Footer</footer>
        </>
    )
}

export default Layout
