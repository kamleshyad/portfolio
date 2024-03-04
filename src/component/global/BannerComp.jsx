import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BannerComp = () => {

    return (
        <div className="bannersec">
            <div className="container">
                <div className="bannercaption">
                    <div className="bannerleft">
                        <h2>I'm Kamlesh Yadav <span>Frontend Developer</span></h2>
                        <h3>React Js</h3>
                        <div className="bannerbtn">
                            <ul className="reset">
                                <li>
                                    <NavLink to="mailto:kamleshyadav1795@gmail.com" className="primaryBtn">Email Me</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" className="secondaryBtn">Download Resume</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bannerright">
                        <div className="bannerimg">
                            <img src="/images/bannerimg.png" width="400" height="313" alt="bannerimg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerComp;