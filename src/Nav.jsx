
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import img from "../src/img/ms_prev_ui.png";
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <div className='nav1'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">

                    <div class="container-fluid">
                        <div className='logo'>
                            <img src={img} />
                        </div>
                        <a class="navbar-brand1" href="#">4S FOODS</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <form class="form">
                            <label for="search">
                                <input class="input" type="text" required="" placeholder="Search twitter" id="search" />
                                <div class="fancy-bg"></div>
                                <div class="search">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                        <g>
                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <button class="close-btn" type="reset">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </label>
                        </form>
                        <div class="collapse navbar-collapse " id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li class="nav-item">
                                   <Link to = '/menu'>OurMenu</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to = './Offer'>Offer</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to = './Contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Nav;







