import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";

import styles from "./plant-components.module.css";
import CardContent from "@material-ui/core/CardContent";
import "./App.css";

const PlantContainer = (props) => {
  const [isFav, setIsFav] = useState(false);

  function changeFav() {
    setIsFav(!isFav);
  }

  const plant = props.plant;
  return (
    <Card style={{ marginBottom: 20, width: "400" }}>
      <CardContent>
        <div className={styles.textColor}>
          <div>
            <img
              displ
              src={plant.imageUrl}
              style={{ maxWidth: "100%" }}
              className="plantImage"
            ></img>
            <div style={{ textAlign: "left" }}>
              <div> Plant species: {plant.species}</div>
              <div> Species : {plant.species}</div>
              <div> leaf color: {plant.leafColor}</div>
              <div> life Span: {plant.lifeSpan}</div>
              <div> {props.label}</div>
              <div> {props.prop3}</div>
            </div>
            <div>
              <IconButton aria-label="fav" onClick={changeFav}>
                {isFav && <FavoriteIcon style={{ color: "red" }} />}
                {!isFav && <FavoriteBorderIcon />}
              </IconButton>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default PlantContainer;
