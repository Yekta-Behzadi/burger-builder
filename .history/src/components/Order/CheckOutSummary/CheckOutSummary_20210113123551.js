import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckOutSummary.css'

const CheckutSummary = (props) => {
  return (
    <div className={classes.CheckOutSummary} >
      <h1>We hope it tasts well</h1>
      <div style={{width: '300px', height:'300px', margin:'auto' }} >
      <Burger/>
      </div>
      <Button 
      className='Danger'
      clicked>
      Cancel
        <Button/>
        <Button 
        className='Success'
        clicked>
       Continue
        <Button/>
     
    </div>
  )
}

export default CheckOutSummary
