import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label:'Cheese' , type: 'cheese'},
  {label:'Meat' , type:'meat' }
]


const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls} >
{controls.map(ctrl => (
<BuildControl
     key={ctrl.label} 
     label={ctrl.label}
     added={ () => props.ingredientAdded(ctrl.type)}
     deducted = {() => props.ingredientDeducted(ctrl.type)}
     disabeled = {props.disabeled[]} 
     />
     ))}   
 </div>
  )
}

export default BuildControls
