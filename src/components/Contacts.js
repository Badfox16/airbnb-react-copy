import React from "react";

export default function Contact(props) {
    return(
        <div className="contacts">

            <div className="contact-card">
                <img src="" alt="Kitten"></img>
                <h3>{props.nome}</h3>
                <div>
                    <img src="" alt="icon"></img>
                    <p>{props.nr}</p>
                </div>
                <div>
                    <img src="" alt="icon"></img>
                    <p>{props.email}</p>
                </div>
            </div>

        </div>
    )
    }