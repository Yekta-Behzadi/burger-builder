import React from 'react'
import burger from '../../Burger/Burger'

const CheckOutSummary = (props) => {
  return (
    <div>
      <h2>We hope it tasts well</h2>
      <div style={{width: '300px', height:'300px', margin:'auto' }} >
      <burger/>
      </div>
    </div>
  )
}

export default CheckOutSummary
