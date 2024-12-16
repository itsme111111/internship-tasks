import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import DisplayUsersPage from "./components/DisplayUsersPage";
import "./components/styles.css";

function App() {
    const [users, setUsers] = useState([]); // State to store user data

    const addUser = (user) => {
        setUsers([...users, user]); // Add new user to state
    };

    return ( <
            Router >
            <
            Routes >
            <
            Route path = "/"
            element = { < RegistrationPage addUser = { addUser }
                />} / >
                <
                Route path = "/display"
                element = { < DisplayUsersPage users = { users }
                    />} / >
                    <
                    /Routes> <
                    /Router>
                );
            }

            export default App;