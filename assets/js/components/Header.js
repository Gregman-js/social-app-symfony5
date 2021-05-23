import React from 'react';
import Logo from '../../img/logo.png';
import '../../css/components/Header.scss';
import {Search, Home, PeopleAlt, Movie, Storefront} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import HeaderIcon from "./HeaderIcon";

function Header() {
    return (
        <header className="p-3 bg-light text-white shadow-sm position-relative">
            <div className="container">
                <div className="header-container d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src={Logo}  alt={'logo'}/>
                    </a>

                    <ul className="nav col-12 col-lg-auto flex-grow-1 mb-2 justify-content-center mb-md-0">
                        <HeaderIcon Icon={Home} />
                        <HeaderIcon Icon={PeopleAlt} />
                        <HeaderIcon Icon={Movie} />
                        <HeaderIcon Icon={Storefront} />

                    </ul>

                    <form className="search-form col-12 col-lg-auto mb-3 mb-lg-0 me-5">
                        <div className="search-form-wrapper">
                            <Search className={'search-form-wrapper-icon'}/>
                            <input
                                type="search"
                                className=""
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </div>
                    </form>

                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"
                           id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                                 className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
