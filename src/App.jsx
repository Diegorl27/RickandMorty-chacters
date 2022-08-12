import React, { useState } from 'react'
import './styles/app.css'
import { Header } from './components/Header/index.jsx'
import { Characters } from './components/Characters/index'
import { ModalCharacters } from './components/ModalCharacters'

function App () {
  const [isModalCharacter, setModalCharacter] = useState(false)
  const [oneCharacter, setOneCharacter] = useState([])
  const episodes = oneCharacter.episode

  const takeCharacter = (id, characters) => {
    const character = characters.filter(characters => characters.id === id)
    return setOneCharacter(character[0])
  }

  return (
    <div>
      <Header />
      <Characters
        takeCharacters={takeCharacter}
        isModalCharacter={isModalCharacter}
        setModalCharacter={setModalCharacter}
      />
      <ModalCharacters
        isModalCharacter={isModalCharacter}
        setModalCharacter={setModalCharacter}
        oneCharacter={oneCharacter}
        episodes={episodes}
      />
    </div>
  )
}

export default App
