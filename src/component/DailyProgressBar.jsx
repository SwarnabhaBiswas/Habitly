
const DailyProgressBar = ({ habits }) => {
  const today = new Date().toISOString().slice(0, 10);

  const total = habits.length;
  const done = habits.filter(habit => habit.progress?.[today]).length;
  const percentage = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="ml-[11rem] w-full max-w-lg mx-auto p-4 bg-white/10 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-color2 mb-2">Today's Progress</h2>
      <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-color6 to-color4 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-2 text-center text-color2 font-medium">
        {done} of {total} habits done ({percentage}%)
      </p>
    </div>
  );
};

export default DailyProgressBar;
