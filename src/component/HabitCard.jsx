
import { useNavigate } from "react-router-dom";
import { useHabits } from "../contexts/HabitContext";

const HabitCard = ({ habit }) => {
  const { markHabitDone, deleteHabit,handleClick } = useHabits();

  const navigate=useNavigate();

  const today = new Date().toISOString().slice(0, 10);
  const isTodayDone = habit.progress?.[today] === true;

  return (
    <div
      className={`w-[250px] to-color4  rounded-2xl shadow-md p-5 text-color1 hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-[1.02] border border-color6 
    ${
      isTodayDone
        ? "backdrop-blur-md bg-white/10 cursor-not-allowed"
        : "bg-gradient-to-tr from-color7 to-color6"
    }
    `}
    >
      <h2 className={`text-xl font-semibold mb-2 text-color2 ${
      isTodayDone
        ? "line-through"
        : ""
    }
    `}>{habit.name}</h2>

      <p className="text-sm mb-1 text-color2 mt-5">
        <span className="font-medium">Started:</span> {habit.startDate}
      </p>

      <p className="text-sm text-color2">
        <span className="font-medium">Frequency:</span> {habit.frequency}
      </p>

      <p className="text-xs text-color2 mb-4 mt-5">
        <span className="font-medium text-color2">Next Due:</span>{" "}
        {habit.nextDueDate}
      </p>

      <div className="flex justify-between items-center">
        {/* <button 
        onClick={()=>navigate('/add')}
        className="px-2 py-1 text-white text-sm rounded-md transition bg-green-600 hover:bg-green-700 active:scale-95 shadow-md hover:shadow-lg">
          Edit
        </button> */}

        <button
          className="px-2 py-1 text-white text-sm rounded-md transition bg-green-600 hover:bg-green-700 active:scale-95 shadow-md hover:shadow-lg"
          onClick={() => deleteHabit(habit.id)}
        >
          Delete
        </button>
        <button
          onClick={() => {
            markHabitDone(habit.id)
            !isTodayDone? handleClick():""
            }}
          className={`ml-2 px-3 py-1 text-white text-sm rounded-md transition 
    ${
      isTodayDone
        ? "bg-red-500 hover:bg-red-600"
        : "bg-green-600 hover:bg-green-700"
    }
    active:scale-95 shadow-md hover:shadow-lg`}
        >
          {isTodayDone ? "Mark Undo" : "Mark Done"}
        </button>
      </div>
    </div>
  );
};

export default HabitCard;
