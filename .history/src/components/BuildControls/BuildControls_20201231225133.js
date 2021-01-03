import React from 'react'
import BuildControl from '../BuildControls/BuildControl/BuildControl'
import classes from './BuildControl/'
const control = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label:'Cheese' , type: 'cheese'},
  {label:'Meat' , type:'meat' }
]


const BuildControls = (props) => {
  return (
    <div>
{      control.map(ctrl =>{
  <BuildControl/>
})}    </div>
  )
}

export default BuildControls
