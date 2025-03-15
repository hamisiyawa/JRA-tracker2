import React from 'react'
import Swal from 'sweetalert2'

function DeleteBtn({ onDelete }) {
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
    <div>
      <button className="btn btn-sm btn-danger py-2 px-3 my-2 mx-2" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteBtn
