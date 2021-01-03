import React from 'react'
import classes from './BuildControls.css'

const controls = [
  {label: 'Salad', types: 'salad'},
  {label: 'Bacon', types: 'bacon'},
  {label:'Cheese' , types: 'cheese'},
  {label:'Meat' , types:'meat' }
]


const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls} >
{controls.map(ctrl =>{
  <
})}   
 </div>
  )
}

export default BuildControls
