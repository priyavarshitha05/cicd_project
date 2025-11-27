 import React, { useState } from 'react';
import './AddItem.css';

export default function AddItem() {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [procedure, setProcedure] = useState('');

  const handleAdd = () => {
    if (recipeName.trim() === '') return;

    const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const newRecipe = {
      name: recipeName,
      ingredients,
      procedure
    };
    localStorage.setItem('recipes', JSON.stringify([...existingRecipes, newRecipe]));

    // Clear form fields
    setRecipeName('');
    setIngredients('');
    setProcedure('');
    alert('Recipe added!');
  };

  return (
    <div className="add-item-wrapper">
      
 <div className="left-panel">
        <h2>Add Items</h2>
        <p>Add your favorite dishes!</p>
       <img src="/food-collage.png" alt="Food collage" className="collage" />
      </div>

      <div className="right-panel">
        <h2>Add New Recipe</h2>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <textarea
          placeholder="Ingredients (comma separated or lines)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

 
 
 