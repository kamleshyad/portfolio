import { useState } from "react";
import Navbar from "./Navbar";

const HeaderComp = () => {

    return (
        <div className="headersec">
            <div className="container">
                <div className="logo">
                    <img src="/images/logo.png" width="211" height="49" alt="logo" />
                </div>
                <div className="headerright">
                    <Navbar />
                    <div className="headerbtn">
                        <a href="mailto:kamleshyadav1795@gmail.com" className="primaryBtn">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComp;
