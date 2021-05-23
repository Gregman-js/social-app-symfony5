import React from 'react';
import {Avatar, Button} from "@material-ui/core";

function Contact({name}) {
    return (
        <Button className={'rounded list-group-item list-group-item-action lh-tight justify-content-start'}>
            <Avatar src={'https://github.com/mdo.png'}/>
            <h5 className={'my-0 text-capitalize ps-2'}>{name}</h5>
        </Button>
    );
}

export default Contact;
