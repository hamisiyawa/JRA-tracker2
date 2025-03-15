import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faUsers  } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css'


function Dashboard() {
  return (
    <div className='dashoard-container'>
      <div className="title">
        <h3>Dashboard</h3>

      </div>
      <div className="dasboard-cards">
        <div className="d-card">
           <div className="card-inner">
              <h4>All PROJECTS</h4>
              <FontAwesomeIcon icon={faFolder} className="card-icon" />
           </div>
           <h1>20</h1>
        </div>

        <div className="d-card">
           <div className="card-inner">
              <h4>OPEN</h4>
              <FontAwesomeIcon icon={faFolder} className="card-icon" />
           </div>
           <h1>20</h1>
        </div>

        <div className="d-card">
           <div className="card-inner">
              <h4>ONGOING</h4>
              <FontAwesomeIcon icon={faFolder} className="card-icon" />
           </div>
           <h1>20</h1>
        </div>

        <div className="d-card">
           <div className="card-inner">
              <h4>COMPLETED</h4>
              <FontAwesomeIcon icon={faFolder} className="card-icon" />
           </div>
           <h1>20</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
