import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import './cars.css'

const Cars = () => {

  const [datacar, setDataCar] = useState([])

  const loadDataCar = () => {
    axios.get('http://localhost:3500/users')
    .then((res) => {
      setDataCar(res.data)
      // console.log(datacar)
      
    })
  }
  useEffect(() => {
    loadDataCar([])
  })

  return (
    <div className='cars'>
      <Row className='cars-card border'>
            {datacar.map((data) => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    {data.name}
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
              ))}
      </Row>
      
       
       
    </div>
  )
}

export default Cars
