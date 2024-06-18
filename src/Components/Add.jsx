import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadimg from '../assets/upload.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';

const Add = () => {

  const [preview,setPreview] = useState(uploadimg)
  //for image upload
  const [imageFileStatus, setImageFileStatus] = useState(false)
  //add project 
  const [projectDetails, setProjectDetails] = useState({
    title:"", languages:"", github:"", website:"", overview:"", projectImg:""
  })

  useEffect(() => {
    if (projectDetails.projectImg.type=="image/png" || projectDetails.projectImg.type=="image/jpeg" || projectDetails.projectImg.type=="image/jpg") {
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    } else {
      setImageFileStatus(false)
      setPreview(uploadimg)
      setProjectDetails({...projectDetails,projectImg:""})
    }
  }, [projectDetails.projectImg])
  console.log(projectDetails);

  //adding project
  const handleAddProject = async() => {
    const {title, languages, github, website, overview, projectImg} = projectDetails
    if (projectDetails.title && projectDetails.languages && projectDetails.github && projectDetails.website && projectDetails.overview && projectDetails.projectImg) {
      //api call - in body [reqbody, reqheader]
      //reqbody
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImg", projectImg)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        //api part
        try {
          const result = await addProjectAPI(reqBody,reqHeader)
          console.log(result);
          if (result.status==200) {    
            handleClose()
            toast.success("Project successfully added !!")
          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(err);
        }
      } 
    } else {
      toast.info("Please fill the form completely !!")
    }
  }

  //modal
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    setProjectDetails({
      title:"", languages:"", github:"", website:"" , projectImg:"", overview:""
    })
  }
  const handleShow = () => setShow(true)




  return (
    <>
     <button onClick={handleShow} className='btn btn-primary'> <i className='fa-soild fa-plus'></i>  Add Project</button>

     {/* modal */}
     <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Project Details !!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'teal'}}>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} onChange={(e) => setProjectDetails({...projectDetails,projectImg:e.target.files[0]})} />
                <img className='img-fluid' height={'200px'} src={preview} alt="" />
              </label> 
              { !imageFileStatus && <div className='text-warning fw-bolder my-2'>
              *Upload only the following file types (jpeg, jpg, png) here !!</div> } 
            </div>
            <div className="col-lg-8">
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={(e) => setProjectDetails({...projectDetails,title:e.target.value})} />
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Languages used in Project' value={projectDetails.languages} onChange={(e) => setProjectDetails({...projectDetails,languages:e.target.value})}/>
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project GITHUB Link' value={projectDetails.github} onChange={(e) => setProjectDetails({...projectDetails,github:e.target.value})}/>
              </div>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Project WEBSITE Link' value={projectDetails.website} onChange={(e) => setProjectDetails({...projectDetails,website:e.target.value})} />
              </div>
            </div>
          </div>
          <div className='row p-3'>
           <input type="text" className='form-control' placeholder='Project Abstract' value={projectDetails.overview} onChange={(e) => setProjectDetails({...projectDetails,overview:e.target.value})}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  )
}

export default Add