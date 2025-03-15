import { useState, useEffect } from 'react';
import React from 'react'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Import trash icon

function DeleteBtn({ onDelete }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDelete = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            onDelete(); // Call the delete function if confirmed
            Swal.fire('Deleted!', 'Your project has been deleted.', 'success');
          }
        });
      };

  return (
    <>
      {isMobile ? (
      <button className="btn-icon" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} className='file-icon delete' />
      </button>
      ) : (
          <button className="btn btn-sm btn-danger py-2 px-3 my-2 mx-2" onClick={handleDelete}>
              Delete
          </button>
      )}
    </>
  )
}

export default DeleteBtn
