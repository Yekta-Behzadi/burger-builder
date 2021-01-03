import React from 'react'
import BuildControl from '../BuildControls/BuildControl/BuildControl'
import classes from './BuildControls.css'
const control = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label:'Cheese' , type: 'cheese'},
  {label:'Meat' , type:'meat' }
]


const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls} >
{control.map(ctrl =>{
  <BuildControl/>
})}    </div>
  )
}

export default BuildControls
