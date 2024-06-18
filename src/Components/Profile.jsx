import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import head from '../assets/profilehead.png'


const Profile = () => {

  const [open, setOpen] = useState(false)


  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 style={{color:'teal'}}>Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-dark fw-bolder'> <i className='fa-solid fa-chevron-down'></i> </button>
      </div>
      
      {/* collapse content from react-boootstrap*/}
      <Collapse in={open}>
        <div className='row align-items-center justify-content-center shadow rounded p-3 mt-3' id="example-collapse-text">
          <label className='text-center mb-2'>
            <input type="file" style={{display:'none'}} />
            <img width={'200px'} height={'150px'} className='rounded-circle' src={head} alt="" />
          </label>
          <div className="mb-2">
            <input type="text" placeholder='GITHUB URL' className='form-control' />
          </div>
          <div className="mb-2">
            <input type="text" placeholder='LINKEDIN URL' className='form-control' />
          </div>
          <div className="d-grid">
            <button className='btn btn-primary'>Update Profile</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile