import React from 'react';
import {Button} from "@material-ui/core";
import {PeopleAlt} from "@material-ui/icons";

function HeaderIcon({Icon, path="#"}) {
    return (
        <li>
            <Button>
                <a href={path} className="nav-link text-secondary"><Icon/></a>
            </Button>
        </li>
    );
}

export default HeaderIcon;
