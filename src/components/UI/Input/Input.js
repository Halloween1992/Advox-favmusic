import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === true && classes.invalid
      } `}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        id={props.id}
      />
    </div>
  );
};

export default Input;
