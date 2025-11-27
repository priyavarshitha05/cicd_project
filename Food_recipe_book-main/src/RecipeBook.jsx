import React, { useEffect, useState, useMemo } from 'react';
import './RecipeBook.css';

export default function RecipeBook() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(data);
  }, []);

  // Function to update localStorage whenever recipes change
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }, [recipes]);

  // Optimized image selection with an object lookup
  const imagePaths = {
    dosa: '/dosa.png',
    biryani: '/biryani.png',
    'chicken fry': '/chicken-fry.png',
    pulihora: '/pulihora.png',
    'Chana Masala': '/chana-masala.png',
    espresso: '/espresso.png',
    latte: '/latte.png',
    'filter coffee': '/filter-coffee.png',
    macha: '/macha.png',
    'Mugal biryani': '/mugal-biryani.png',
    



    
  };

  const getImage = (name) => {
    return imagePaths[name.toLowerCase()] || '/default.png';
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Memoize filtered recipes to prevent unnecessary recalculations
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [recipes, searchTerm]);

  return (
    <div className="recipe-book-container">
      <div className="left-panel">
        <h1>My Recipe Book</h1>
        <img src="/recipeBook.png" alt="My Recipe Book Poster" className="poster-img" />
      </div>

      <div className="right-panel">
        <div className="right-content">
          <input
            type="text"
            className="search-bar"
            placeholder="Search recipe by name..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {filteredRecipes.length === 0 ? (
            <p>No recipes found.</p>
          ) : (
            <div className="recipe-list">
              {filteredRecipes.map((recipe, index) => (
                <div className="recipe-card" key={index}>
                  <img src={getImage(recipe.name)} alt={recipe.name} />
                  <h3>{recipe.name}</h3>
                  <h4>Ingredients</h4>
                  <p className="recipe-text">{recipe.ingredients}</p>
                  <h4>Procedure</h4>
                  <p className="recipe-text">{recipe.procedure}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
