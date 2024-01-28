import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink exact to="#">Medicines</NavLink></li>
                            <li><NavLink exact to="#">Orders</NavLink></li>
                            <li><NavLink exact to="#">Hosting</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink exact to="#">Company</NavLink></li>
                            <li><NavLink exact to="#">Team</NavLink></li>
                            <li><NavLink exact to="#">Careers</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>PillTrackr</h3>
                        <p>One-stop solution for efficient inventory control. Simplify your pharmacy business with real-time updates, seamless tracking, and intuitive management tools.</p>
                    </div>
                   
                </div>
                <p className="copyright">PillTrackr ©2024</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
