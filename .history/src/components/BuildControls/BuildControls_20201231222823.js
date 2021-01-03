import React from 'react'
import BuildControls from '../BuildControls/BuildControl/BuildControl'

const control = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label:'Cheese' , type: 'cheese'},
  {label:'Meat' , type:'meat' }
]


const BuildControls = (props) => {
  return (
    <div>
{      control.map(ctrl =>{})}    </div>
  )
}

export default BuildControls
