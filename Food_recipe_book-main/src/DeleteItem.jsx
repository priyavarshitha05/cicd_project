import React, { useEffect, useState, useMemo } from 'react';
import './DeleteItem.css';

export default function DeleteItem() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(data);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (nameToDelete) => {
    const updatedRecipes = recipes.filter(
      (recipe) => recipe.name.toLowerCase() !== nameToDelete.toLowerCase()
    );
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    alert(`Recipe "${nameToDelete}" deleted!`);
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [recipes, searchTerm]);

  return (
    <div className="delete-item-wrapper">
      <div className="left-panel">
        <h2>Delete Recipes</h2>
        <p>Find and remove any recipe you don't want.</p>
        
      </div>

      <div className="right-panel">
        <input
          type="text"
          className="search-bar"
          placeholder="Search recipe by name..."
          value={searchTerm}
          onChange={handleSearch}
        />

        {filteredRecipes.length === 0 ? (
          <p>No matching recipes found.</p>
        ) : (
          <div className="recipe-list">
            {filteredRecipes.map((recipe, index) => (
              <div className="recipe-card" key={index}>
                <h3>{recipe.name}</h3>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Procedure:</strong> {recipe.procedure}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(recipe.name)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
