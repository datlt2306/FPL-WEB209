import MainNav from './MainNav'

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center'>
                <a href=''>Logo</a>
                <MainNav />
            </div>
        </header>
    )
}

export default Header
