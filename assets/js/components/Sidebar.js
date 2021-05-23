import React from 'react';
import '../../css/components/Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link link-dark">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Customers
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
