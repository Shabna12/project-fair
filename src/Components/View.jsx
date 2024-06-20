import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { allProjectAPI, removeProjectAPI, userProjectAPI } from '../Services/allAPI'
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI'


const View = () => {

  const {editResponse, setEditResponse} = useContext(editResponseContext)

  const {addResponse,setAddResponse} = useContext(addResponseContext)

  const [userProjects, setUserProjects] = useState([])

  // console.log(userProjects)

  useEffect (() => {
    getUserProjects()
  }, [addResponse,editResponse])

  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      //api call
      try {
        const result = await userProjectAPI(reqHeader)
        console.log(result);
        if (result.status==200) {
          setUserProjects(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  //delete project
  const handleDeleteProject = async(pid) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await removeProjectAPI(pid,reqHeader)
        if (result.status==200) {
          getUserProjects()
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }


  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="mt-3" style={{color:'teal'}}>All Projects</h2>
        <div>
          <Add/>
        </div>
      </div>
      <div className="mt-4">
        {
          userProjects?.length>0 ?
          userProjects?.map(project => (
            <div key={project?._id} className="border rounded p-3 d-flex justify-content-between mb-3">
              <h3> {project?.title} </h3>
              <div className="d-flex align-items-center">
                <div>
                 <Edit  project={project} />
                </div>
                <div className="btn">
                  <a href={project?.github} target='_blank'> <i className='fa-brands fa-github'></i>   </a>
                </div>
                <button onClick={() => handleDeleteProject(project?._id)} className='btn text-danger'> <i className='fa-solid fa-trash'></i>   </button>
              </div>
            </div>
          ))
          :
          <div className="fw-bolder text-warning">No projects uploaded yet !!</div>
        }
      </div>
    </>
  )
}

export default View