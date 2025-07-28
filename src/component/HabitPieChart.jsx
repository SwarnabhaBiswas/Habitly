import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#4E9F3D", "#8f8f8fb6", "#FF4444"];

const HabitPieChart = ({ habits }) => {
  const total = habits.length;
  const completed = habits.filter(habit => habit.progress?.[new Date().toISOString().slice(0, 10)]).length;
  const pending = total - completed;

  const data = [
    { name: "Completed Today", value: completed },
    { name: "Pending Today", value: pending },
  ];

  return (
    <div className="w-full h-[20rem] bg-white/10 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-bold text-color2 mb-4">Today's Habit Status</h3>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} className="border border-none">
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HabitPieChart;
