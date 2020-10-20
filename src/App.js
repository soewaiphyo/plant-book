import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlantContainer from "./plant-components";
import Car from "./car-components";

class plant {
  constructor(species, imageUrl, leafColor, lifeSpan) {
    this.species = species;
    this.imageUrl = imageUrl;
    this.leafColor = leafColor;
    this.lifeSpan = lifeSpan;
  }
}

const plantA = new plant(
  "Moonlight Potho",
  "https://images.squarespace-cdn.com/content/v1/59480bc7725e25bf7ae3ade9/1499276424141-L2POPWFQ7SR1JM0TYMOJ/ke17ZwdGBToddI8pDm48kMJE_oPqVDlYco0BmZZqKB17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URi4X8B9Krz2qQ9LtOQvf9tzTXvYGV_EBNca-TfE3VhzzrD36oouzk3SSBf3bbVhnA/Moonlight+6+inch.jpg?format=2500w",
  "green",
  "3 years"
);
const plantB = new plant(
  "Montreal",
  "https://img.crocdn.co.uk/images/products2/pl/20/00/03/20/pl2000032008.jpg?width=940&height=940",
  "Dark green",
  "5 years"
);
const plantC = new plant(
  "Purple Orchid",
  "https://s3.amazonaws.com/finegardening.s3.tauntoncloud.com/app/uploads/2018/01/23173930/041082036-01_xlg.jpg",
  "Purple Flower, Green leaves",
  "1 years"
);
const plants = [plantC, plantA, plantB];

function App() {
  const myCarA = <Car label="Car A"></Car>;
  // [ Purple Orchid, Montreal ]
  const [favourteItems, setFavourteItems] = useState([]);

  return (
    <div className="App">
      {myCarA}
      <Car label="Car B"></Car>
      <div
        style={{
          width: "600px",
          margin: "0 auto",
        }}
      >
        <h1>My Favorite Plants</h1>
        {plants.map((plant, i) => (
          <PlantContainer
            key={i}
            isFav={
              favourteItems.findIndex((item) => item == plant.species) >= 0
            }
            plant={plant}
            label="lala"
            prop3={i}
            onFavChange={() => {
              favourteItems.findIndex((item) => item == plant.species) >= 0
                ? setFavourteItems(
                    favourteItems.filter((item) => item !== plant.species)
                  )
                : setFavourteItems([...favourteItems, plant.species]);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
