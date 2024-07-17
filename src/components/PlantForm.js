import React, { useState } from 'react';
import './PlantForm.css';

const PlantForm = ({ addPlant }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlant({
      id: Date.now(),
      name,
      type,
      wateringFrequency,
    });
    setName('');
    setType('');
    setWateringFrequency('');
  };

  return (
    <form onSubmit={handleSubmit} className="plant-form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da Planta" required />
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Tipo de Planta" required />
      <button type="submit">Adicionar Planta</button>
    </form>
  );
};

export default PlantForm;
