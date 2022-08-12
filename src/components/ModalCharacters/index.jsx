import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal } from 'react-bootstrap'

export const ModalCharacters = ({ isModalCharacter, setModalCharacter, oneCharacter, episodes }) => {
  return (
    <>
      <Modal
        show={isModalCharacter === true}
        onHide={() => {
          setModalCharacter(!isModalCharacter)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card' style={{ justifyContent: 'center', width: '100%' }}>
            <img
              style={{ borderRadius: '50%', width: '150px', margin: '20px auto 20px auto', borderBottom: 'black 2.5px solid' }}
              src={oneCharacter.image}
              alt={oneCharacter.name}
            />
            <h4 className='title' style={{ margin: '0px auto 20px auto' }}>{oneCharacter.name}</h4>
            {oneCharacter !== undefined && episodes !== undefined
              ? (<p className='container' style={{ margin: '0px auto 20px auto', width: '80%' }}> The character {oneCharacter.name} appears in {episodes.length} chapters of the series, {oneCharacter.gender !== 'Female' && 'He'} {oneCharacter.gender === 'Female' && 'She'} is a {oneCharacter.species} of the gender {oneCharacter.gender}, his place of origin is {oneCharacter.origin.name} and he is currently {oneCharacter.status}</p>)
              : (
                  'No hay daros'
                )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              setModalCharacter(!isModalCharacter)
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
