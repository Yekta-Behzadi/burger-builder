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
    <>
    <h4>the price is : <strong>{props.price.toFixed(2)} </strong> </h4>
    <div className={classes.BuildControls} >
{controls.map(ctrl => (
<BuildControl
     key={ctrl.label} 
     label={ctrl.label}
     added={ () => props.ingredientAdded(ctrl.type)}
     deducted = {() => props.ingredientDeducted(ctrl.type)}
     disabeled = {props.disabeled[ctrl.type]} 
     />
     ))}   
 </div>
 
  )
}

export default BuildControls
