import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    return (
        <div>
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default BaseLayout
