import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <aside>
                <nav>
                    <ul>
                        <li>
                            <Link to='/admin'>Thống kê</Link>
                        </li>
                        <li>
                            <Link to='/admin/users'>Người dùng</Link>
                        </li>
                        <li>
                            <Link to='/admin/products'>Sản phẩm</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
