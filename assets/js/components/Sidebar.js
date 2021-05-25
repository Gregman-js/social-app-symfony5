import React from 'react';
import '../../css/components/Sidebar.scss';
import {Button} from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Button className="nav-link link-dark w-100 justify-content-start">
                        Home
                    </Button>
                </li>
                <li>
                    <Button className="nav-link link-dark w-100 justify-content-start">
                        Dashboard
                    </Button>
                </li>
                <li>
                    <Button className="nav-link link-dark w-100 justify-content-start">
                        Orders
                    </Button>
                </li>
                <li>
                    <Button className="nav-link link-dark w-100 justify-content-start">
                        Products
                    </Button>
                </li>
                <li>
                    <Button className="nav-link link-dark w-100 justify-content-start">
                        Customers
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
