import { useState, useEffect } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function DetailsBtn({ projectId }) {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavigate = () => {
        navigate(`/projects/${projectId}`); // Redirect to project's details page
    };

  return (
    <>
        {isMobile ? (
        <button className="btn-icon" onClick={handleNavigate}>
            <FontAwesomeIcon icon={faInfoCircle} className="file-icon details" />
        </button>
        ) : (
            <button className="btn btn-sm btn-secondary py-2 px-3 my-2 mx-2" onClick={handleNavigate}>Details</button>
        )}
    </>
  )
}

export default DetailsBtn
