import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    return (
        <div>
            <header>header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default BaseLayout
