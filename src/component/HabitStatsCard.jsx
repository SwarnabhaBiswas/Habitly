import { useHabits } from "../contexts/HabitContext";

const ProgressOverview = () => {

  const {habits}=useHabits();

  const today = new Date().toISOString().slice(0, 10);

  const total = habits.length;
  const done = habits.filter(habit => habit.progress?.[today]).length;
  const remaining = total-done;

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="p-3 rounded-xl bg-color6 text-white shadow-lg w-[8rem]">
        <h3 className="text-lg font-semibold flex flex-col"><span>Total</span><span>Habits</span> </h3>
        <p className="text-3xl font-bold">{total}</p>
      </div>
      <div className="p-3 rounded-xl bg-green-500 text-white shadow-lg w-[8rem] ml-10">
        <h3 className="text-lg font-semibold">Completed Today</h3>
        <p className="text-3xl font-bold">{done}</p>
      </div>
      <div className="p-3 rounded-xl bg-red-600 text-white shadow-lg w-[8rem] ml-20">
        <h3 className="text-lg font-semibold">Pending Today</h3>
        <p className="text-3xl font-bold">{remaining}</p>
      </div>
    </div>
  );
};

export default ProgressOverview;
