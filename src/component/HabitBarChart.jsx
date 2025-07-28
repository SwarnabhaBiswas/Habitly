import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HabitBarChart = ({ habits }) => {
  const data = habits.map((habit) => ({
    name: habit.name,
    done: Object.values(habit.progress || {}).filter((v) => v).length,
  }));

  return (
    <div className="w-full h-[100%] bg-white/10 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-bold text-color2 mb-4">Habit Completions</h3>
      <div className="w-full h-[90%] focus:outline-none outline-none">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={data}
            className="outline-none focus:outline-none"
            
          >
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              contentStyle={{
                backgroundColor: "#1e1e1e",
                border: "none",
                borderRadius: "8px",
                color: "#ffffff",
              }}
              itemStyle={{ color: "#ffffff" }}
              labelStyle={{ color: "#999" }}
            />
            <Bar
              dataKey="done"
              fill="#4E9F3D"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HabitBarChart;
