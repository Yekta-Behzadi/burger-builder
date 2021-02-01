import React from 'react'
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder'

const CheckOutSummary = (props) => {
  return (
    <div>
      <h2>We hope it tasts well</h2>
      <div style={{width: '300px', height:'300px', margin:'auto' }} >
      <BurgerBuilder
      </div>
    </div>
  )
}

export default CheckOutSummary
