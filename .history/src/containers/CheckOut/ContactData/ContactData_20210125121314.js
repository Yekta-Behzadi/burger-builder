import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-order";
import Spiner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import {connect} from 'react-redux'
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        valid : false,
        validation: {
          required: true
        },
        touched: false
      },
      email: {
        elementType: "text",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: "",
        valid : false,
        validation: {
          required: true
        },
        touched: false
      },
      street: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        valid : false,
        validation: {
          required: true
        },
        touched: false
      },
      zipCode: {
        elementType: "text",
        elementConfig: {
          type: "text",
          placeholder: "Your Code",
        },
        value: "",
        valid : false,
        validation: {
          required: true,
          minLength : 5,
          maxLength :5
        },
        touched: false
      },
      deliveryMethhod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        validation:{},
        value: 'fastest',
        valid:true,
       touched: false
      },
    },
    loading: false,
    formIsValid :false
  };
  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
     formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value 
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice,
      orderData : formData
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };


checkValidity = (value,rules) =>{
let isValid = true;
if (rules.required) {
  isValid = value.trim() !== '' && isValid;
}
if (rules.minLength){
  isValid = value.length >= rules.minLength && isValid
}
if (rules.maxnLength){
  isValid = value.length <= rules.maxnLength && isValid
}
return isValid

}

  inputChangedHandler = (e, inputIdentifier) =>{
    const updatedOrderForm = {...this.state.orderForm}
    const updatedFormElement = {...updatedOrderForm[inputIdentifier]}
    updatedFormElement.value = e.target.value
    updatedFormElement.valid =this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    console.log(updatedFormElement)
    updatedOrderForm[inputIdentifier] = updatedFormElement
    let formIsValid =true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }
    this.setState({orderForm : updatedOrderForm ,formIsValid : formIsValid})
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler} >
        {formElementArray.map((elementArray) => (
          <Input
          key={elementArray.id}
            elementType={elementArray.config.elementType}
            elementConfig={elementArray.config.elementConfig}
            elementValue={elementArray.config.value}
            // id = id: key ke hamon address, name va...
            changed ={(e)=> this.inputChangedHandler(e,elementArray.id)}
            invalid ={!elementArray.config.valid}
            shouldValidate={elementArray.config.validation}
            touched ={elementArray.config.touched}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid} >
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spiner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps =state =>{
  return{
    ings : state.ingredients,
    price: state.ingredients
  }
}

export default connect(mapStateToProps) (ContactData);
