import React from 'react'
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav>
            <h1>
                <Link to="/signUp">Sign Up</Link>
            </h1>
            <h1>
                <Link to="/login">Login</Link>
            </h1>
            <h1>
                <Link to="/token">Token</Link>
            </h1>
        </nav>
    )
}
