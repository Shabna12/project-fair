import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContext'


const Header = ({insideDashboard}) => {

  const {isAuthorised, setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }


  return (
    <>
     <Navbar className="position-fixed w-100 top-0 border" style={{zIndex:'10', backgroundColor:'lightgray'}}>
        <Container>
          <Navbar.Brand>
           <Link to={'/'} className='fw-bolder text-dark fs-3' style={{textDecoration:'none'}}> <i  className='fa-brands fa-docker'></i> Project Fair
           </Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <div className='ms-auto'>
              <button onClick={handleLogout} className='btn btn-link' style={{textDecoration:'none'}}>Logout  <i className='fa-solid fa-right-from-bracket'></i> </button>
            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header