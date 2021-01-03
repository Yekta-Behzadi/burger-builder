import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', types: 'salad'},
  {label: 'Bacon', types: 'bacon'},
  {label:'Cheese' , types: 'cheese'},
  {label:'Meat' , types:'meat' }
]


const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls} >
{controls.map(ctrl =>
  (<BuildControl
     key={ctrl.label} 
     label={ctrl.label}
     added ={ props.ingredientAdded} />)
)}   
 </div>
  )
}

export default BuildControls
