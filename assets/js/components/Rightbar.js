import React from 'react';
import '../../css/components/Rightbar.scss';
import Contact from "./Contact";

function Rightbar() {
    return (
        <div className="rightbar d-flex flex-column align-items-stretch flex-shrink-0 bg-light">
            <div className="d-flex align-items-center flex-shrink-0 p-3 text-dark">
                <span className="fs-5 fw-semibold">Contacts</span>
            </div>
            <hr className={'mx-auto my-0'} width={"80%"} color={'whitesmoke'}/>
            <div className="list-group list-group-flush scrollarea p-3">
                <Contact name={'Some One'} />
            </div>
        </div>
    );
}

export default Rightbar;
