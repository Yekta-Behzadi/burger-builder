import React from 'react'
import BergurLogo from '../../assets/images/original.png'
import classes from './Logo.css'

const Logo = (props) => {
  return (
    <div className>
      <img src={BergurLogo} alt="My Bergur"/>
    </div>
  )
}

export default Logo
