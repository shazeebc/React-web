import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <>
                <h1 className="cs1">4S FOODS</h1>
            <div class="add">
                <div class="add1">

                    <ul>
                        <li><i class="fa fa-user" aria-hidden="true"></i>  Mohammed Shazeeb C</li>
                        <li><i class="fa fa-envelope" aria-hidden="true"></i>  saquishazz@gmail.com</li>
                        <li><i class="fa fa-mobile" aria-hidden="true"></i> +91  7708663788</li>
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i>  Tamil Nadu ,India</li>
                    </ul>
                </div>
                <div class="add2">
                    <div class="add3">
                        <div class="inname">Name</div>
                        <input class="width" type="text" placeholder="Name " required />

                        <div class="inemail">Email Id</div>
                        <input class="width" type="text" placeholder=" Email Id " required />
                        <div class="inmessage">Message</div>
                        <div class="message1">
                            <textarea name="message" id="" cols="40" rows="8" placeholder="Message"></textarea>
                        </div>
                        <div class="send">
                            <a href="send"><i class="fa fa-paper-plane" aria-hidden="true"></i> Send</a>
                        </div>

                    </div>
                </div>,
            </div>

        </>
    )
}
export default Contact;