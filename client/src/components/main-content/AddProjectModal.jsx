import React, { useState, useEffect }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useStoreContext } from '../../context/StoreContext'; 

const AddProjectModal = () => {

  // changes start
  const { addProject } = useStoreContext();  // Access the addProject function
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectDescription: '',
    projectStartDate: '',
    projectEndDate: '',
    projectBudget: '',
    projectFile: null,
  })

  const [fileName, setFileName] = useState('')
  const [errors, setErrors] = useState({})
  const [popupMessage, setPopupMessage] = useState({ type: '', message: '' })

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData({ ...formData, projectFile: file })
    setFileName(file ? file.name : '')
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })

    // Clear error when user types
    setErrors({ ...errors, [id]: !value ? 'This field is required' : '' })
  }

  const validateForm = () => {
    const newErrors = {}

    Object.keys(formData).forEach((key) => {
      if ((key !== 'projectFile') && !formData[key]) {
        newErrors[key] = 'This field is required'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const newProject = {
        title: formData.projectTitle,
        description: formData.projectDescription,
        startdate: formData.projectStartDate,
        endDate: formData.projectEndDate,
        badget: Number(formData.projectBudget),  // Adjusted to match your data structure
      };
      addProject(newProject);  // Add to context (in-memory for now)
      setPopupMessage({ type: 'success', message: 'Project added successfully!' })
      // Clear form after success (optional)
      setFormData({
        projectTitle: '',
        projectDescription: '',
        projectStartDate: '',
        projectEndDate: '',
        projectBudget: '',
        projectFile: null,
      })
      setFileName('')
    } else {
      setPopupMessage({ type: 'error', message: 'Please fill all required fields.' })
    }
  }

  useEffect(() => {
    if (popupMessage.message) {
      const timer = setTimeout(() => setPopupMessage({ type: '', message: '' }), 3000)
      return () => clearTimeout(timer)
    }
  }, [popupMessage])

  const getInputClass = (field) => {
    if (!formData[field]) return errors[field] ? 'is-invalid' : ''
    return 'is-valid'
  }


  // changes end



  // const [fileName, setFileName] = useState('')

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]
  //   if (file) {
  //     setFileName(file.name)
  //   } else {
  //     setFileName('')
  //   }
  // }



  return (
    <div className="modal fade" id="createProjectModal" tabindex="-1" aria-labelledby="createProjectModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content shadow-sm rounded-4">
            <div className="modal-header Project-modal-header text-white">
            <h5 className="modal-title" id="createProjectModalLabel">Add New Project</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="add-project" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className={`form-control ${getInputClass('projectTitle')}`} id="projectTitle" placeholder="Enter project title" value={formData.projectTitle}
                  onChange={handleChange}/>
                </div>

                <div className="mb-3">
                  <textarea className={`form-control ${getInputClass('projectDescription')}`} id="projectDescription" rows="4" placeholder="Enter project description i.e software to be used" value={formData.projectDescription}
                  onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="projectStartDate" className="form-label">Project Start Date</label>
                  <input type="date" className={`form-control ${getInputClass('projectStartDate')}`} id="projectStartDate"  value={formData.projectStartDate}
                  onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="projectEndDate" className="form-label">Project End Date</label>
                  <input type="date" className={`form-control ${getInputClass('projectEndDate')}`} id="projectEndDate"  value={formData.projectEndDate}
                  onChange={handleChange}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="projectBudget" className="form-label">Project Budget (in USD)</label>
                  <input type="number"  className={`form-control ${getInputClass('projectBudget')}`} id="projectBudget" placeholder="Enter project budget"  value={formData.projectBudget}
                  onChange={handleChange}/>
                </div>

                {/* <!-- Document Upload Section --> */}
                <div className="upload-section mb-3">
                    <FontAwesomeIcon icon={faFile} className='file-icon' />
                    <p>Drag & drop your project document here or click to upload</p>
                    <input
                    type="file"
                    className="form-control-file upload-file"
                    accept=".pdf,.doc,.docx"
                     
                    id="documentInput"
                    onChange={handleFileChange}
                    />
                    <span class="file-name text-success" id="documentFileName">{fileName}</span>
                </div>
                <div className="text-end">
                <button type="submit" className="btn buttons create-btn w-100">Add Project</button>
                </div>
            </form>
            </div>
        </div>
        </div>

        {/* Popup Message */}
        {popupMessage.message && (
          <div className={`popup-message ${popupMessage.type}`}>
            {popupMessage.message}
          </div>
        )}
    </div>
  )
}

export default AddProjectModal