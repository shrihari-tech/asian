import React from "react";

import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="notfound">
            <Link to="/">Home</Link>
            <h1>404 Not Found</h1>
            <p>This page does not exist.</p>
        </div>
    )
}
export default NotFound;