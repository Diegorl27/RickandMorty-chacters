import React from 'react'
import '../../styles/nav.css'
import Logo from '../../images/Logo.png'

export const Header = () => {
  return (
    <>
      <header className='header'>
        <img src={Logo} className='header__logo' />
        <h1 className='header__title'>Rick and Morty</h1>
      </header>
    </>
  )
}
