import React, { useState } from 'react';
import './PlantItem.css';

const PlantItem = ({ plant, removePlant, editPlant }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(plant.name);
  const [type, setType] = useState(plant.type);
  const [wateringFrequency, setWateringFrequency] = useState(plant.wateringFrequency);

  const handleSave = () => {
    editPlant({ ...plant, name, type, wateringFrequency });
    setIsEditing(false);
  };

  return (
    <div className="plant-item">
      {isEditing ? (
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
          <input type="text" value={wateringFrequency} onChange={(e) => setWateringFrequency(e.target.value)} />
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          <h2>{plant.name}</h2>
          <p>Tipo: {plant.type}</p>
          <p>Frequência de Rega: {plant.wateringFrequency}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => removePlant(plant.id)}>Remover</button>
        </div>
      )}
    </div>
  );
};

export default PlantItem;
