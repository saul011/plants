import React from 'react';
import PlantItem from './PlantItem';
import './PlantList.css';

const PlantList = ({ plants, removePlant, editPlant }) => {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} removePlant={removePlant} editPlant={editPlant} />
      ))}
    </div>
  );
};

export default PlantList;
