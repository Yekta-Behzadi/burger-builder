import React from 'react'
import BuildControl from '../BuildControls/BuildControl/BuildControl'
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
  <BuildControl key={ctrl.label} types={ctrl.types}/>
})}   
 </div>
  )
}

export default BuildControls
