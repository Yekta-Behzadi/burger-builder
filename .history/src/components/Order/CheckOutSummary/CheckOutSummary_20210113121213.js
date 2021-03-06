import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckOutSummary.css'
const CheckOutSummary = (props) => {
  return (
    
    <div className={classes.CheckOutSummary
    } >
      <h2>We hope it tasts well</h2>
      <div style={{width: '300px', height:'300px', margin:'auto' }} >
      <Burger/>
      </div>
      <Button className='Danger'>
        Cancel
        <Button/>
        <Button className='Success'>
        Cancel
        <Button/>
    </div>
  )
}

export default CheckOutSummary
