import React from "react";
import "./style.css";

export class NotFound extends React.Component {
    render() {
        return (
            <div className="not-found">
                <h1>Sorry, we missed it...</h1>
                    <a href="/">Back home</a>
            </div>
        )
    }
}