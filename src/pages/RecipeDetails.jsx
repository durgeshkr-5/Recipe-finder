import axios from 'axios';
import { Heading3 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';

function RecipeDetails() {
const {id} = useParams();

const [meal, setMeal] = useState({})
const [loading, setLoading] = useState(false);

const getMealDetails = async() => {
  try {
    setLoading(true);
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.data.meals[0]);
    setMeal(data.data.meals[0]);
    
  } catch (error) {
    console.log(error);
    setMeal([])
  }
  setLoading(false)
}

useEffect(()=> {
  getMealDetails();
},[id])


// const addToFavorite = () => {

// }

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      {loading && <h3>Recipe Datails Loading...</h3>}
      {Object.keys(meal).length === 0 && <h3>No Recipe Found!!!</h3>}
      {Object.keys(meal).length > 0 && 
      <div className='bg-white rounded-lg shadow-md p-6'>
        <div>
          <p className='text-3xl font-bold text-green-600'>Recipe Name : {meal.strMeal}</p>
          <p className='text-xl font-semibold'>Category :{meal.strCategory}</p>
          <p className='text-xl font-semibold'>Area : {meal.strArea}</p>
          <p className='text-xl font-semibold'>Instruction : {meal.strInstructions}</p>
          
          <div className='rounded'><iframe src={meal.strYoutube} frameborder="2"></iframe> </div>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 my-3 rounded-lg shadow-md flex items-center space-x-2 transition-all duration-200">
            <span>Add to Favorite</span ><Heart className="w-5 h-5" />
          </button>
        </div>
      </div>}
    </div>
  )
}

export default RecipeDetails