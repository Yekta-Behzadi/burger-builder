import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckOutSummary.css'

const CheckOutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary} >
      <h1>we hope it tastes well !</h1>
      <div style={{width: '100%', margin: 'auto', }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={checkOutCancelled} >CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={checkOutContinued} >CONTINUE</Button>
    </div>
  )
}

export default CheckOutSummary
