import { Link } from "react-router";
import "./Navigation.css";

export function Navigation() {
    return (
        <div className="px-3 py-2 h-20 bg-sky-950 flex items-center">
            <header className="px-4 py-3">
                <nav className="flex space-x-4 justify-center">
                    <ul className="flex space-x-4 text-white">
                        <li><Link className="custom-link" to=''>Dashboard</Link></li>
                        <li><Link className="custom-link" to='/add'>Add Customer</Link></li>
                        <li><Link className="custom-link" to='/update'>Update Customer</Link></li>
                        <li><Link className="custom-link" to='/delete'>Delete Customer</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
