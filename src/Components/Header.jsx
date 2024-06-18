import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = (insideDashboard) => {
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
              <button className='btn btn-link' style={{textDecoration:'none'}}>Logout  <i className='fa-solid fa-right-from-bracket'></i> </button>
            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header