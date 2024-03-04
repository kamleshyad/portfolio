import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footersec" id="contact">
            <div className="container">
                <h3>Contact Me</h3>
                <div className="contactbox">
                    <h4>I'm available for a discussion <span>whenever you're ready.</span></h4>
                    <NavLink to="#" className="secondaryBtn">Download Resume</NavLink>
                </div>
                <div className="footerbox">
                    <div className="footerimg">
                        <img src="/images/footerpersonimg.png" width="350" height="262" alt="footerpersonimg" />
                    </div>
                    <div className="footermid">
                        <h5>Get in Touch</h5>
                        <ul className="reset">
                            <li><NavLink to="tel:919168737879">+91 9168737879</NavLink></li>
                            <li><NavLink to="mailto:kamleshyadav1795@gmail.com">kamleshyadav1795@gmail.com</NavLink></li>
                        </ul>
                    </div>
                    <div className="footersocial">
                        <h5>Social Link</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;