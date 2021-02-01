import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const CheckOutSummary = (props) => {
  return (
    <div>
      <h2>We hope it tasts well</h2>
      <div style={{width: '300px', height:'300px', margin:'auto' }} >
      <Burger/>
      </div>
      <Button className='Danger'>
    </div>
  )
}

export default CheckOutSummary
