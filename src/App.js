import React, { useState } from 'react';
import PlantList from './components/PlantList';
import PlantForm from './components/PlantForm';
import './App.css';

const App = () => {
  const [plants, setPlants] = useState([]);

  const addPlant = (plant) => {
    setPlants([...plants, plant]);
  };

  const removePlant = (id) => {
    setPlants(plants.filter(plant => plant.id !== id));
  };

  const editPlant = (updatedPlant) => {
    setPlants(plants.map(plant => (plant.id === updatedPlant.id ? updatedPlant : plant)));
  };

  return (
    <div className="container">
      <h1>Lista de Plantas para Cuidar</h1>
      <PlantForm addPlant={addPlant} />
      <PlantList plants={plants} removePlant={removePlant} editPlant={editPlant} />
    </div>
  );
};

export default App;
