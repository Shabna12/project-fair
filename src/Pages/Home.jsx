import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import frstimg from '../assets/landimg.png'
import ProjectCard from '../Components/ProjectCard'
import Card from 'react-bootstrap/Card'
import { homeProjectAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const [homeProjects,setHomeProjects] = useState([])
  const navigate = useNavigate()

  console.log(homeProjects);

  useEffect (() => {
    getHomeProjects()
  }, [])

  const getHomeProjects = async () => {
    try {
      const result = await homeProjectAPI()
      console.log(result);
      if (result.status==200) {
        setHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleProject = () => {
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    } else {
      toast.warning("Please login to get full access to our projects !!")
    }
  }


  return (
    <>
      <div style={{minHeight:'90vh', backgroundColor:'lightgray'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'40px', color:'black'}}> <i className='fa-brands fa-docker'></i>  P R O J E C T - F A I R </h1>
              <p style={{textAlign:'justify', color:'black'}} className='mt-4 fs-5'>
                One stop destination for all Software Development Projects. Where user can add and manage their projects. As well as access all projects available in our website !! What are you waiting for ...
              </p>
              { sessionStorage.getItem("token")?
               <Link to={'/dashboard'} className='btn btn-info mt-3'>Manage Your Projects</Link> 
               :
               <Link to={'/login'} className='btn btn-info mt-3'>START TO EXPLORE</Link> 
              }
            </div>
            <div className="col-lg-6">
              <img width={'500px'} className='img-fluid' src={frstimg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mt-5 text-center">
        <h1 className='mb-5'> Explore Our Projects </h1>
        <marquee behavior="" direction="">
          <div className="d-flex">
            {
              homeProjects?.length>0 &&
              homeProjects?.map(project => (
                <div key={project?._id} className="me-5">
                  <ProjectCard  displayData={project}   />
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleProject} className='mt-4 btn btn-link'>CLICK HERE TO VIEW MORE PROJECTS..</button>
      </div>

      {/* testimony */}
      <div className="d-flex align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-5 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
             <Card.Title className='d-flex align-items-center mt-2 flex-column justify-content-center'>
               <img width={'60px'} height={'60px'} className='rounded-circle' src="https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg" />
               <span className='mt-4'>Tony Stark</span>
             </Card.Title>
             <Card.Text>
               <div className="d-flex justify-content-center mt-3">
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
               </div>
               <p className='mt-3'>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </p>
             </Card.Text>
           </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
             <Card.Title className='d-flex align-items-center mt-2 flex-column justify-content-center'>
               <img width={'80px'} height={'60px'} className='rounded-circle' src="https://i0.wp.com/www.thewrap.com/wp-content/uploads/2023/09/chris-evans-captain-america.jpg?fit=990%2C557&ssl=1" />
               <span className='mt-4'>Steve Rogers</span>
             </Card.Title>
             <Card.Text>
               <div className="d-flex justify-content-center mt-3">
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
               </div>
               <p className='mt-3'>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </p>
             </Card.Text>
           </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
             <Card.Title className='d-flex align-items-center mt-2 flex-column justify-content-center'>
               <img width={'60px'} height={'60px'} className='rounded-circle' src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Bruce-Banner.The-Incredible-Hulk.webp" />
               <span className='mt-4'>Bruce Banner</span>
             </Card.Title>
             <Card.Text>
               <div className="d-flex justify-content-center mt-3">
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
                 <div className="fa-solid fa-star text-warning"></div>
               </div>
               <p className='mt-3'>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </p>
             </Card.Text>
           </Card.Body>
          </Card>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Home