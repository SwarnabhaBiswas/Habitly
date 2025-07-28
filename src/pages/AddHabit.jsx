import { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import { useHabits } from "../contexts/HabitContext";
import { useNavigate } from "react-router-dom";

const AddHabit = () => {
  const [habit, setHabit] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const { addHabit,generateProgress } = useHabits(); 

  const navigate=useNavigate();

  const inputRef=useRef();

  useEffect(function(){
    inputRef.current.focus()
  },[])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim() === "") return;

    const newHabit = {
      id: crypto.randomUUID(),
      name: habit,
      startDate: new Date().toISOString().slice(0, 10),
      frequency,
      progress: generateProgress(frequency) ,
    };

    addHabit(newHabit);
    setHabit(""); 
    setFrequency("daily");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-color7 to-color6">
      <Navbar />
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-[25rem] bg-gradient-to-tr from-color7 to-color6 p-10 rounded-2xl shadow-xl w-full max-w-md mx-auto mt-10 border border-color6"
        >
          <h2 className="text-2xl font-semibold text-color2 mb-6">
            Add a New Habit
          </h2>

          <div className="mb-4">
            <label
              htmlFor="habit"
              className="block text-color2 font-medium mb-2"
            >
              Habit Name
            </label>
            <input
              id="habit"
              type="text"
              value={habit}
              onChange={(e) => setHabit(e.target.value)}
              placeholder="e.g. Morning Walk"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color4"
              ref={inputRef}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="frequency"
              className="block text-color2 font-medium mb-2"
            >
              Frequency
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color6"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button
            type="submit"
            onClick={() => navigate("/habits")}
            className="w-full py-2 bg-gradient-to-r from-color4 to-color6 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
          >
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
