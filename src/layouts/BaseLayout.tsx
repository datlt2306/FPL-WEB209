import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useLocalStorage } from '@/hooks/useStorage'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
    const [user, , removeUser] = useLocalStorage('user', {})
    return (
        <div>
            <Header />
            {user && (
                <p>
                    Hi {user?.user?.name} <button onClick={removeUser}>Logout</button>
                </p>
            )}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default BaseLayout
