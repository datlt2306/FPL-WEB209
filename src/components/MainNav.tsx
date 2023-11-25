import { Link } from 'lucide-react'

const MainNav = () => {
    return (
        <div className='flex items-center space-x-4'>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/product/add'>Product Add</Link>
        </div>
    )
}

export default MainNav
