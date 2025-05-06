import React,{useContext, useState,useEffect} from "react";
import {userContext} from "./App"; //importing userContext from App.js
import { Link } from "react-router-dom";
import axios from "axios"; //importing axios for API calls
//sprear operator props
function Home(){
    // useState
    const [num, setNum] = useState(0);

    //theme
    const [theme, setTheme] = useState("light");

    //toggle theme function
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    //form
    const [forData,setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //post data
        axios.post("http://localhost:5000/user/register", forData)
            .then((response) => {
                console.log("Data stored in DB",response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(forData);
        setFormData({
            name: "",
            email: "",
            password: ""
        });
    }

    //useEffect
    useEffect(() => {
        setNum(100);
        console.log("useEffect called");
        const data = fetch("https://fakestoreapi.com/products");
        data.then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error));

    }, []);

    const styles = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
    }
    //increment function
    const increment = () => {
        setNum(count=> count + 1);
    }
    //decrement function
    const decrement = () => {
        setNum(count => (count > 0 ? count - 1 : 0))
    }

    //destructuring props
    const user = useContext(userContext);
    return(
        <div className="home">
            <Link to="/about">About</Link>
            <h1>Home</h1>
            <p>This is the home page.</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <button onClick={increment}>Increment</button>
            <p>Number: {num}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={styles}>
                <h2>Theme: {theme}</h2>
                <p>This is the {theme} theme.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={forData.name} 
                    onChange={handleChange} 
                    required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={forData.email} 
                    onChange={handleChange} 
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={forData.password} 
                    onChange={handleChange} 
                    required
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home;