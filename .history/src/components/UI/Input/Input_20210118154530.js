import React from "react";
import classes from "./Input.css";

const Input = (props) => {
  let inputElement = null;
  const inputClasses =[];
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.inputElement}
          {...props.elementConfig}
          value={props.value} onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.inputElement}
          {...props.elementConfig}
          value={props.value} onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classes.inputElement}
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
          className={classes.inputElement}
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