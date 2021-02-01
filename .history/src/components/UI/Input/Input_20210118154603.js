import React from "react";
import classes from "./Input.css";

const Input = (props) => {
  let inputElement = null;
  const inputClasses =[inpu];
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inpu}
          {...props.elementConfig}
          value={props.value} onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inpu}
          {...props.elementConfig}
          value={props.value} onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inpu}
          value={props.value} >
             {props.elementConfig.options.map(option => (
               <option key ={option.value}
               value={option.value} onChange={props.changed} > {option.displayValue} </option>
             ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inpu}
          {...props.elementConfig}
          value={props.value} onChange={props.changed}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.label}> {props.label} </label>
      {inputElement}
    </div>
  );
};

export default Input;
