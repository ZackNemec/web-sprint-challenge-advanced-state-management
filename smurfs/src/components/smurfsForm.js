import React from "react";
import { Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = React.useState({
    name: "",
    age: "",
    height: "",
  });
  const changeHandler = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    props.addSmurf(smurf);
  };
  return (
    <Form onSubmit={submitHandle}>
      <Input
        type="text"
        name="name"
        placeholder="name"
        value={props.name}
        onChange={changeHandler}
        className="input"
      />
      <Input
        type="text"
        name="age"
        placeholder="age"
        value={props.age}
        onChange={changeHandler}
        className="input"
      />
      <Input
        type="text"
        name="height"
        placeholder="name"
        value={props.height}
        onChange={changeHandler}
        className="input"
      />
      <Button>Add Smurf</Button>
    </Form>
  );
};
const mapStateToPros = (state) => {
  return {
    smurfs: state.smurfs,
    isAdding: state.isAdding,
    error: state.error,
  };
};
export default connect(mapStateToPros, { addSmurf })(SmurfForm);
