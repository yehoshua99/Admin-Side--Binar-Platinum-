import React , {useState} from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import {Row, Col, Form, Button} from 'react-bootstrap'
import Dashboard from '../../Pages/Dashboard/Dashboard'



const SideBar = () => {

    const[show, setShow] = useState(false)
  return (
    <main className={show ? 'space-toggle' : null }>
        <header className={` header ${show ? 'space-toggle' : null}`}>
            <div className="header-toggle" onClick={() => setShow(!show)}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <Row >
                <Col >
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                </Col>
            </Row>
        </header>
        <aside className={`sidebar ${show ? 'show' : null}`}>
            <nav className="nav">
                <div>
                    <Link to='/' className="nav-logo">
                        <div className='Homepage-btn-short'></div>
                        {/* <i className="fas fa-home-alt nav-logo-icon"></i> */}
                        {/* <span className="nav-logo-name">Homepage</span> */}
                        <div className="Homepage-btn-long"></div>
                    </Link>

                    <div className="nav-list">
                        <Link to='/dashboard' className='nav-link active'>
                            <i className="fas fa-home-alt nav-link-icon"></i>
                            <span className="nav-link-name">Dasboard</span>
                        </Link>
                        <Link to='/cars' className="nav-link active">
                            <i className="fas fa-light fa-truck nav-link-icon"></i> 
                            <span className="nav-link-name">Car</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </aside>
        <h1>content</h1>
    </main>
  )
}

export default SideBar
