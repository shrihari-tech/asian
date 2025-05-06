import React,{useContext} from "react";
import {userContext} from "./App";
import { Link, useParams } from "react-router-dom";
function About(){   
    const user=useContext(userContext);
    const {id} = useParams(); //getting id from url
    return(
        <div className="about">
            <Link to="/">Home</Link>
            <h3>About : {id}</h3>
            <h1>About</h1>
            <p>This is the about page.</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default About;