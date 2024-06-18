import React, { useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { allProjectAPI } from '../Services/allAPI'


const View = () => {

  const [userProjects, setUserProjects] = useState([])

  console.log(userProjects)

  useEffect (() => {
    getUserProjects()
  }, [])

  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      //api call
      try {
        const result = await allProjectAPI(reqHeader)
        console.log(result);
        if (result.status==200) {
          setUserProjects(result.data)
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
                 <Edit/>
                </div>
                <div className="btn">
                  <a href={project?.github} target='_blank'> <i className='fa-brands fa-github'></i>   </a>
                </div>
                <button className='btn text-danger'> <i className='fa-solid fa-trash'></i>   </button>
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