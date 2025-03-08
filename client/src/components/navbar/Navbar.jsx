import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    // State to track user type (Client, Worker, Guest)
    const [userType, setUserType] = useState("Client"); // Default is "Client"
    // State for username (Default: 'Guest')
    const [username, setUsername] = useState('Guest');

    useEffect(() => {
        // Simulate fetching user data (replace this with real authentication logic later)
        const fetchUserData = async () => {
            // Simulated API call
            const user = { name: "Joel" }; // Replace this with real API call in the future
            setUsername(user.name);
        };

        fetchUserData();
    }, []); // Runs once on component mount
  return (
    <div>
        <nav class="navbar navbar-dark p-2">
            <div className="container d-flex justify-content-space-between align-items-center">
                <a className="navbar-brand" href="index.html">
                    JRA <span className="user-type">{userType}</span>
                </a>

                <div className="dropdown profileDropdown pt-3">
                    <p className="text-light dropdown-toggle"  id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <span id="profileName">{username}</span>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                        <li><a className="dropdown-item text-danger" href="#" onclick="logout()">Logout</a></li>
                    </ul>
                </div>
            </div>  
        </nav>
    </div>
  )
}

export default Navbar