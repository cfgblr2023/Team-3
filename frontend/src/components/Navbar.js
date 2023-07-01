import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/achievements'>Achievements</Link>
            <Link to='/fund'>Donate</Link>
        </div>
    )
}
