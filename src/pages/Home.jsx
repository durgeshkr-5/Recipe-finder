import React, { useState } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
const [meals, setMeals] = useState([]);
const [query,setQuery] = useState("");
const [loading,setLoading] = useState(false);

const searchMeals = async() =>{
      if(query.trim() !== ""){
        try {
          setLoading(true);
          const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
          // console.log(data.data.meals);
          setMeals(data.data.meals)
          setLoading(false)
        } catch (error) {
          console.log(error);
          setMeals([])
        }
      }
      else{
        setMeals([])
      }
}

  return (
    <div className="p-6">
      <div className="max-w-xl mx-auto">
        {/* Search bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-green-500">
          <Search className="text-gray-500 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for recipes..."
            className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
          <button className="ml-3 bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition"
          onClick={searchMeals}
          >Search</button>
        </div>
      </div>

      {/* Display recipe in cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {loading ? (
          <h3 className="text-center col-span-full">Loading recipes...</h3>
        ) : meals.length === 0 ? (
          <h3 className="text-center col-span-full">No Recipe Found</h3>
        ) : (
          meals.map((meal) => (
            <Link to={`/${meal.idMeal}`} key={meal.idMeal} className="block">
              <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold text-gray-800 text-center">
                    {meal.strMeal}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
