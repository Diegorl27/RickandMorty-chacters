import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Pagination } from '../Pagination'
import { Spinner } from 'react-bootstrap'

export const Characters = ({ takeCharacters, setModalCharacter, isMyModalCharacter }) => {
  const [characters, setCharacters] = useState([])
  const [isLoad, setLoad] = useState(false)
  return (
    <div className='container' style={{ background: 'gray' }}>
      <div>
        <Pagination
          isLoading={setLoad}
          onFetch={(character) => {
            setCharacters([...character])
          }}
        />
      </div>
      {!isLoad ? (characters.map(({ id, image, name }) => (
        <div key={id} style={{ marginLeft: 'auto', display: 'inline-block' }}>
          <Card style={{ width: '11rem', margin: '20px' }}>
            <Card.Img variant='top' src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Button
                variant='primary'
                onClick={() => {
                  setModalCharacter(true)
                  takeCharacters(id, characters)
                }}
              >More
              </Button>
            </Card.Body>
          </Card>
        </div>
      )))
        : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
          )}
          <div>
      </div>
    </div>
  )
}
