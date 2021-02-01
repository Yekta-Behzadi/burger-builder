import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux'

const CheckOutSummary = (props) => {
  return (
    <Aux></Aux>
    <div>
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
