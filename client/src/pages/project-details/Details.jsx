import React from 'react'
import { useParams } from 'react-router-dom';
import { useStoreContext } from '../../context/StoreContext';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord, faFilePdf, faFileExcel } from '@fortawesome/free-solid-svg-icons';

function Details() {
  const { id } = useParams(); // Get project ID from URL
  const { projects } = useStoreContext(); // Get projects from context

  // Find the project by ID
  const project = projects.find((p) => p.id.toString() === id); 

  if (!project) {
      return <h2>Project not found</h2>;
  }

  // Determine File Type & Icon
  const fileUrl = project.fileUrl; // URL of the uploaded file
  const fileExtension = fileUrl.split('.').pop().toLowerCase();
  let fileIcon = null;
  
  if (fileExtension === 'doc' || fileExtension === 'docx') {
    fileIcon = <FontAwesomeIcon icon={faFileWord} className="file-icon word" />;
  } else if (fileExtension === 'pdf') {
    fileIcon = <FontAwesomeIcon icon={faFilePdf} className="file-icon pdf" />;
  } else if (fileExtension === 'xls' || fileExtension === 'xlsx') {
    fileIcon = <FontAwesomeIcon icon={faFileExcel} className="file-icon excel" />;
  }

  return (
    <div>
        <div className="container projectDetails">
          <div className="details-container">
            <div className="card card-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {/* file attachement  */}

              {fileUrl && (
                <div className="file-section">
                  {fileIcon && (
                    <a href={fileUrl} download className="file-link" target='_blank'>
                      {fileIcon} Download File
                    </a>
                  )}
                </div>
              )}

              {/* Project Budget */}
              <div className="budget-section">
                <span className="budget-badge">Budget: ${project.budget}</span>
              </div>
              <p className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</p>
            </div>

            <div className="card bid-card">
              <h3>Place a Bid</h3>
              <form>
                <label htmlFor="bidAmount">Bid Amount ($)</label>
                <input type="number" id="bidAmount" placeholder="Enter your bid" required />

                <label htmlFor="bidMessage">Message</label>
                <textarea id="bidMessage" placeholder="Write a message..." rows="3"></textarea>

                <button type="submit" className="btn buttons btn-bid">Submit Bid</button>
              </form>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Details
