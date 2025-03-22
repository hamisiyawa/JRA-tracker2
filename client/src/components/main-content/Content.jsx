import React, { useState } from 'react'
import AddProjectModal from './AddProjectModal'
import './MainContent.css'
import SearchBtn from './SearchBtn'
import FilterBtn from './FilterBtn'
import ProjectsList from './ProjectsList'
import TermsAndConditions from './TermsAndConditions'
import Dashboard from '../dashboard/Dashboard'
import Details from '../../pages/project-details/Details'

const Content = () => {
    const [filterStatus, setFilterStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilterChange = (status) => {
        setFilterStatus(status)
    }
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
  return (
    
    <div className='container my-4 content'>
        <ul className="nav nav-tabs" id="dashboardTabs">
            <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#profile">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#terms">terms of service</a>
            </li>
        </ul>

        {/* <!-- Tabs Content --> */}
        <div className="tab-content mt-3">
            
            {/* <!-- My Projects Section --> */}
            <div className="tab-pane fade show active" id="projects">
                
                <h2>All Projects</h2>
                <div className="row g-2 mb-3">
                    <SearchBtn searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
                    <FilterBtn onFilterChange={handleFilterChange} />
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <div className="create-project-btn">
                            <button className="btn buttons btn-sm w-100 create-btn" data-bs-toggle="modal" data-bs-target="#createProjectModal">+ Create Project</button>
                        </div> 
                    </div>
                </div>
               
               <ProjectsList filterStatus={filterStatus} searchTerm={searchTerm} />

            </div>
            

            {/* <!-- Messages Section --> */}
            <div className="tab-pane fade" id="dashboard">
                
                <Dashboard />
               
            </div>

            {/* -- Notifications Section  */}
            <div className="tab-pane fade" id="profile">
                <h2>My Profile Settings</h2>
              
            </div>

            {/* -- TOS  Section  */}
            <div className="tab-pane fade" id="terms">
            <TermsAndConditions /> 
            
            </div>
        </div>

        {/* <!-- Create Project Modal --> */}
         <AddProjectModal/>
    </div>
  )
}

export default Content