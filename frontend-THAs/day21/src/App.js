import './App.css';
import CalorieList from './List';
import CalorieCard from './CalorieCard';
import {useState} from "react";

function App() {
  const [newFood, setNewFood] = useState('');
  const [newCalorie, setNewCalorie] = useState('');

  const [list, updateList] = useState(CalorieList)
  const handleAddFood = value => {
    setNewFood(value);
  };

  const handleCalorie = value => {
    setNewCalorie(value);
  };

  const handleSubmit = () => {
    if (newFood === '' || newCalorie === '') {
      alert('Add something');
    } else {
      let ele = {
        food: newFood,
        callories: newCalorie
      };
      let temp = [...list, ele];
      updateList(temp);
      setNewCalorie('');
      setNewFood('');
    }
  };
  return (
    <div className="calorie-list">
       <input
        placeholder="Add Food"
        onChange={e => handleAddFood(e.target.value)}
        value={newFood}
      />
      <input
        placeholder="Add Calorie"
        onChange={e => handleCalorie(e.target.value)}
        value={newCalorie}
        type="number"
      />
      <button onClick={handleSubmit}>Submit</button>
      {
        list.map(item => {
          return <CalorieCard
            key={item.foodName}
            name={item.foodName}
            calorie={item.calories}
            list={list}
            update={updateList}
          />
        })
      }
    </div>
  );
}

export default App;