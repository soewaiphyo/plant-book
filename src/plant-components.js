import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const PlantContainer = ({ plant }) => {
  return (
    <Card style={{ marginBottom: 20, width: "400" }}>
      <CardContent>
        <div>
          <div>
            <img displ src={plant.imageUrl} style={{ maxWidth: "100%" }}></img>
            <div style={{ textAlign: "left" }}>
              <div> Plant species: {plant.species}</div>
              <div> Species : {plant.species}</div>
              <div> leaf color: {plant.leafColor}</div>
              <div> life Span: {plant.lifeSpan}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default PlantContainer;
