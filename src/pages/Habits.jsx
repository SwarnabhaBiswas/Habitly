import Navbar from "../component/Navbar";
import HabitCard from "../component/HabitCard";
import { useHabits } from "../contexts/HabitContext";

const HabitDetails = () => {

  const {habits}=useHabits(); 

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-color7">
      <Navbar />
      <div className="mt-40 w-[80%] h-[70%]  border rounded-md border-none overflow-y-auto pt-5 pl-[2rem] pb-[0.7rem]">
        <div className="flex flex-wrap justify-start gap-x-6 gap-y-8">
          {habits.map((habit, index) => (
            <HabitCard habit={habit} key={`${habit.id}-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
