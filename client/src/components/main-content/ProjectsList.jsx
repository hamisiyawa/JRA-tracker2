import React from 'react'
import { useStoreContext } from '../../context/StoreContext'
import DeleteBtn from './DeleteBtn';
import UpdateBtn from './UpdateBtn';
import DetailsBtn from './DetailsBtn';

const ProjectsList = ({ filterStatus, searchTerm }) => {
    const { projects } = useStoreContext();

    const filteredProjects = projects.filter(
        (project) => (filterStatus === 'All' || project.status === filterStatus) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );


  return (
    <div>
        {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
            <div key={project.id} className="card project-card mb-3">
            <div className="card-body">
                <h5>{project.title}</h5>
                <p className='description'>{project.description}</p>
                <p className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</p>
                <div className="project-actions">
                    <UpdateBtn/>
                    <DeleteBtn/>
                    <DetailsBtn  projectId={project.id} />
                </div>
            </div>
            </div>
        ))
        ) : (
        <div className='empty-project-list'>
            <div className="empty-content">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png"
                    alt="No Projects"
                    className="empty-image"
                />
                <p className="empty-text">No projects found, kindly try to reset your search creteria or consider adding new projects</p>
            </div>
        </div>  
        )}
    </div>
  )
}

export default ProjectsList