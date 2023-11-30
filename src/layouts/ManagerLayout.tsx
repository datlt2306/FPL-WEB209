import { useLocalStorage } from '@/hooks/useStorage'
import { Outlet } from 'react-router-dom'

const ManagerLayout = () => {
    const [user, , removeUser] = useLocalStorage('user', {})
    return (
        <div>
            <aside>
                {user && (
                    <p>
                        Hi {user?.user?.name} <button onClick={removeUser}>Logout</button>
                    </p>
                )}
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default ManagerLayout
