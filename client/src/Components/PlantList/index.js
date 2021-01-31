import { plants } from '../../data/plants';
import { useState, useEffect } from 'react';

function PlantList() {
  const [plantsList, setPlantsList] = useState([]);
  useEffect(() => {
    console.log(plants);
    setPlantsList([...plants]);
  }, []);
  return (
    <div className="plant-list">
      {plantsList.map((plant) => (
        <div
          key={plant.uid}
          className="plant-card"
          onClick={() => console.log(`clicked ${plant.name}`)}
        >
          <img src={plant.image} alt="" className="plant-img" />
          <div className="plant-info">
            <h2>{plant.name}</h2>
            <h3>But friends call me {plant.nickname}</h3>
            <p className="lead">
              I should be watered every {plant.wateringInterval} days.
            </p>
            <div className="plant-water-info">
              <p>Last watered on : {plant.lastWatering}.</p>
              <p>Next watering : {plant.nextWatering}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantList;
