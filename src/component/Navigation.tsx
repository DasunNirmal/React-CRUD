import {Link} from "react-router";


export function Navigation() {
    return (
        <>
            <header className="navbar">
                <nav className="navbar-list">
                    <ul className=".navbar-item">
                        <Link className='navbar-link' to=''>Dashboard</Link>
                        <Link className='navbar-link' to='/add'>Add Customer</Link>
                        <Link className='navbar-link' to='/update'>Update Customer</Link>
                        <Link className='navbar-link' to='/delete'>Delete Customer</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}