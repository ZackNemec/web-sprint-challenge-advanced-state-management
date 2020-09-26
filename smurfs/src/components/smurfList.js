import React from "react";
import SmurfCard from "./smurfCard";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";
import {} from "reactstrap";

const SmurfList = (props) => {
  React.useEffect(() => {
    props.fetchSmurf();
  }, []);
  return (
    <div>
      {props.smurfs.map((smurfs) => (
        <SmurfCard smurfs={smurfs} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchSmurf })(SmurfList);
