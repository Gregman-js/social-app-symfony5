import React from 'react';
import Header from "./Header";
import '../../css/components/Home.scss';
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import Content from "./Content";

function Home() {
    return (
        <>
            <div className='d-flex flex-column vh-100'>
                <Header/>
                <div className="body d-flex flex-row flex-grow-1">
                    <Sidebar/>
                    <Content/>
                    <Rightbar/>
                </div>
            </div>
        </>
    );
}

export default Home;
