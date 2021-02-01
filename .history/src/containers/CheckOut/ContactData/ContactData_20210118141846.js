import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-order";
import Spiner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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
        }
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
        }
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
        }
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
        }
      },
      deliveryMethhod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
       
      },
    },
    loading: false,
  };
  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
     formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value 
    }
    const order = {
      ingredients: this.props.ingredients,
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
let isValid = false;
if (rules.required) {
  isValid = value.trim() !== '';
}
return isValid
}

  inputChangedHandler = (e, inputIdentifier) =>{
    const updatedOrderForm = {...this.state.orderForm}
    const updatedFormElement = {...updatedOrderForm[inputIdentifier]}
    updatedFormElement.value = e.target.value
    updatedFormElement.valid =this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    console.log(updatedFormElement)
    updatedOrderForm[inputIdentifier] = updatedFormElement
    this.setState({orderForm : updatedOrderForm})
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
          />
        ))}
        <Button btnType="Success">
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

export default ContactData;
