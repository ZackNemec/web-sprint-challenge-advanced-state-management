import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
const SmurfCard = (props) => {
  return (
    <Card>
      <CardTitle>{props.smurfs.name}</CardTitle>
      <CardText>Age: {props.smurfs.age}</CardText>
      <CardText>Height: {props.smurfs.height}</CardText>
    </Card>
  );
};
export default SmurfCard;
