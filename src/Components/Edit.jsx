import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadimg from '../assets/upload.jpg'

const Edit = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
      <button onClick={handleShow} className='btn'> <i className='fa-solid fa-edit'></i> </button>

      {/* updating modal copied from add.jsx */}
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details !!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'lightgray'}}>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} />
                <img className='img-fluid' height={'200px'} src={uploadimg} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Languages used in Project' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project GITHUB Link' />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project WEBSITE Link' />
              </div>
            </div>
          </div>
          <div className='row p-3'>
           <input type="text" className='form-control' placeholder='Project Abstract' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit