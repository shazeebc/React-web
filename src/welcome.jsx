import React from "react";
import './index.css';
import img1 from "../src/img/img8.png";
import { Link } from "react-router-dom";


function Welcome() {
    return (
        <>
            <div className="bg">
                <div className="backimg">
                    <div className='Welcome'>
                        <div className='cont'>
                            <div className='chef'>
                                <img src={img1} />
                            </div>
                            <h3 className="wel">Welcome To </h3>
                            <h1 className="food12">4S FOODS</h1>
                            <p className="star">*****************</p>
                            <h4 className="best">Best Food, Good Food</h4><br />
                            <Link to = './Not' className="book19">Book Your Table Now</Link><br /><br></br>
                            <h2 className="icai"> *Indian  *Chinese *Arbaian *Italian</h2><br></br>
                            <button class="button">
                                <span class="button_lg">
                                    <span class="button_sl"></span>
                                    <span class="button_text"><Link to= '/menu'>Menu Card</Link></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome;