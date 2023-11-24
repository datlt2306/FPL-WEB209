import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const MainNav = (props: Props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home page</Link>
                </li>
                <li>
                    <Link to='/products'>Product page</Link>
                </li>
                <li>
                    <Link to='/products/add'>Product Add page</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav
