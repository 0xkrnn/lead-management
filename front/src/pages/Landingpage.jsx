import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faObjectUngroup, faCode, faClock, faShieldHalved, faTerminal, faWandSparkles, faForwardFast } from "@fortawesome/free-solid-svg-icons"
import "../index.css"
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/group.png"
import Footer from '../components/Footer';
import computer from "../assets/images/computer1.png"
function Landingpage() {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <nav className='navbar'>
                <h3 className='logo'> Lead Manager</h3>
                <ul>
                    <li className='lists'> <Link className='links'> Teams </Link></li>
                    <li className='lists'> <Link className='links'> Documentation </Link></li>
                    <li className='lists'> <Link className='links'> Pricing </Link> </li>
                </ul>
                <button className='button' onClick={() => navigate("/register")}> Register </button>
            </nav>

            <div className='hero-section'>
                <img src={computer} className='landing-img' />
                <h2 className='hero-section-title'>Lead Management Tool</h2>
                <p className='hero-section-para'>Lead is a blazingly fast, totally extendable launcher. <br />It lets you complete tasks, calculate, share common links, and much more.</p>
            </div>

            <div className='team-section'>
                <div className='span'>
                    <section>
                        <FontAwesomeIcon icon={faClock} />
                        <h3>Save Time on everyday task</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odit assumenda dolorem deleniti, <br /> <br />explicabo nam molestiae minima fugit excepturi voluptatem reprehenderit necessitatibus, itaque illum est doloremque nesciunt voluptatum architecto quas sint voluptates perspiciatis illo ipsum possimus quidem? Quos, nesciunt odio?</p>
                    </section>
                    <img src={img} alt="group-image" />
                </div>
                <div className="team-section-item">
                    <FontAwesomeIcon icon={faLink} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate voluptatum rerum suscipit porro labore?</p>
                </div>
                <div className="team-section-item">
                    <FontAwesomeIcon icon={faObjectUngroup} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate voluptatum rerum suscipit porro labore?</p>
                </div>
                <div className="team-section-item">
                    <FontAwesomeIcon icon={faCode} />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate voluptatum rerum suscipit porro labore?</p>
                </div>
            </div>

            <div className='productivity-section'>
                <h1>More focus, <span className='productivity-section-dull-head'>less clutter.</span></h1>
                <p>Keep your workspace centralized, clean and tidy. <br /> Engineered with performance and your privacy in mind.</p>
                <div className='productivity-grid'>
                    <div>
                        <FontAwesomeIcon icon={faShieldHalved} />
                        <h3>Security by default</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ipsa porro recusandae. Deserunt sapiente dicta rerum similique, maiores numquam. Delectus tempore pariatur quidem itaque!</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faWandSparkles} />
                        <h3>Extension support</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ipsa porro recusandae. Deserunt sapiente dicta rerum similique, maiores numquam. Delectus tempore pariatur quidem itaque!</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTerminal} />
                        <h3>Learn once, remember forever</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ipsa porro recusandae. Deserunt sapiente dicta rerum similique, maiores numquam. Delectus tempore pariatur quidem itaque!</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faForwardFast} />
                        <h3>Quick</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error ipsa porro recusandae. Deserunt sapiente dicta rerum similique, maiores numquam. Delectus tempore pariatur quidem itaque!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Landingpage;