import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { getJobRecommendations } from '../services/jobService';
import '../styles/DashBoard.css';
const Dashboard = () => {
    const [jobRecommendations, setJobRecommendations] = useState([]);

    useEffect(() => {
        // Fetch job recommendations when the Dashboard component mounts
        const token = localStorage.getItem('token');
        // console.log(token)
        // console.log("1")
        // Decode the JWT token to get the user ID
        const decodedToken = jwt_decode(token);
        console.log(decodedToken)
        console.log("2")
        // console.log(decodedToken)
        const userId = decodedToken.userId;
        getJobRecommendations(userId)
            .then((recommendations) => setJobRecommendations(recommendations))
            .catch((error) => console.error('Error:', error));
    }, []);

    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');
        // Redirect the user to the homepage or login page
        navigate('/')
      };

    return (
        <div className="container">
            <h2>Welcome to the Dashboard!</h2>
            <h3>Job Recommendations:</h3>
            <ul>
                {jobRecommendations.map((job) => (
                    <li key={job._id}>
                        <p>Company: {job.company}</p>
                        <p>Title: {job.title}</p>
                        <p>Description: {job.description}</p>
                        <p>
                            Link: <a href={job.link} className="job-link" target="_blank" rel="noopener noreferrer">{job.link}</a>
                        </p>
                    </li>
                ))}
            </ul>
            {/* You can add other content or features here */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;